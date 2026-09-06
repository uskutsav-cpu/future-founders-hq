"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Field, applicationSteps, validateField } from "@/data/application";
import {
  downloadData,
  submitApplication,
  submitContact,
} from "@/lib/submissions";
const STORAGE_KEY = "ff-application-v1";
function FormField({
  field,
  value,
  onChange,
  error,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const common = {
    id: field.id,
    name: field.id,
    value,
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => onChange(e.target.value),
    "aria-invalid": !!error,
    "aria-describedby":
      [field.hint ? field.id + "-hint" : "", error ? field.id + "-error" : ""]
        .filter(Boolean)
        .join(" ") || undefined,
    required: !field.optional,
  };
  return (
    <div
      className={`form-field ${field.type === "textarea" ? "full-width" : ""}`}
    >
      <label htmlFor={field.id}>
        {field.label}
        {field.optional && <span>Optional</span>}
      </label>
      {field.hint && (
        <p className="field-hint" id={field.id + "-hint"}>
          {field.hint}
        </p>
      )}
      {field.type === "textarea" ? (
        <textarea {...common} rows={5} maxLength={field.maxLength || 2000} />
      ) : field.type === "select" ? (
        <select {...common}>
          <option value="">Select an option</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...common}
          type={field.type || "text"}
          autoComplete={field.autoComplete}
          maxLength={field.maxLength || 200}
          min={field.type === "number" ? new Date().getFullYear() : undefined}
          max={
            field.type === "number" ? new Date().getFullYear() + 15 : undefined
          }
        />
      )}
      {field.type === "textarea" && (
        <span className="character-count">
          {value.length} / {field.maxLength || 2000}
        </span>
      )}
      {error && (
        <p className="field-error" id={field.id + "-error"}>
          {error}
        </p>
      )}
    </div>
  );
}
export function ApplicationForm() {
  const [data, setData] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [save, setSave] = useState(false);
  const [storageMessage, setStorageMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState("");
  const [clearConfirm, setClearConfirm] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const draft = JSON.parse(raw);
          if (
            draft.version === 1 &&
            typeof draft.data === "object" &&
            draft.data !== null
          ) {
            const allowed = applicationSteps
              .flatMap((s) => s.fields)
              .map((f) => f.id);
            const safe = Object.fromEntries(
              Object.entries(draft.data).filter(
                ([k, v]) =>
                  allowed.includes(k) &&
                  typeof v === "string" &&
                  (v as string).length <= 3000,
              ),
            ) as Record<string, string>;
            setData(safe);
            setSave(true);
            setStorageMessage("Saved draft restored.");
          }
        }
      } catch {
        setStorageMessage(
          "Local saving is unavailable. You can still complete and download your application.",
        );
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  const persistDraft = (next: Record<string, string>) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: 1, data: next }),
      );
      setStorageMessage("Draft saved on this device.");
    } catch {
      setStorageMessage(
        "Unable to save on this device. Download your answers before leaving.",
      );
    }
  };
  const update = (id: string, v: string) => {
    const next = { ...data, [id]: v };
    setData(next);
    if (save) persistDraft(next);
    setErrors((e) => ({ ...e, [id]: "" }));
    setConfirmed(false);
    setResult("");
  };
  const move = (n: number) => {
    setStep(n);
    setErrors({});
    setTimeout(() => {
      heading.current?.focus();
      heading.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "center",
      });
    }, 0);
  };
  const validate = (all = false) => {
    const fields = all
      ? applicationSteps.flatMap((s) => s.fields)
      : applicationSteps[step].fields;
    const e: Record<string, string> = {};
    fields.forEach((f) => {
      const error = validateField(f, data[f.id] || "");
      if (error) e[f.id] = error;
    });
    setErrors(e);
    if (Object.keys(e).length) {
      const id = Object.keys(e)[0];
      if (all) {
        const idx = applicationSteps.findIndex((s) =>
          s.fields.some((f) => f.id === id),
        );
        setStep(idx);
      }
      setTimeout(() => document.getElementById(id)?.focus(), 0);
      return false;
    }
    return true;
  };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      if (validate()) move(step + 1);
      return;
    }
    if (!validate(true)) return;
    if (!confirmed) {
      setErrors({
        confirmation: "Please confirm you have reviewed your answers.",
      });
      return;
    }
    setBusy(true);
    try {
      const r = await submitApplication(data);
      setResult(
        r.status === "local-only"
          ? r.message
          : `Application received. Reference: ${r.reference}`,
      );
    } catch {
      setResult(
        "Something went wrong. Your answers are still here. Download a copy and try again.",
      );
    } finally {
      setBusy(false);
    }
  };
  const toggleSave = (enabled: boolean) => {
    setSave(enabled);
    if (enabled) persistDraft(data);
    if (!enabled) {
      try {
        localStorage.removeItem(STORAGE_KEY);
        setStorageMessage("Local draft saving is off.");
      } catch {
        setStorageMessage("Your browser could not clear its saved draft.");
      }
    }
  };
  return (
    <div className="application-layout container">
      <aside className="application-sidebar">
        <p className="eyebrow">CHAPTER APPLICATION</p>
        <h1>
          A new chapter <br />
          starts here<span className="brand-accent">.</span>
        </h1>
        <ol>
          {applicationSteps.map((s, i) => (
            <li key={s.name} aria-current={step === i ? "step" : undefined}>
              <span>{i < step ? "✓" : `0${i + 1}`}</span>
              {i < step ? (
                <button type="button" onClick={() => move(i)}>
                  {s.name}
                </button>
              ) : (
                s.name
              )}
            </li>
          ))}
        </ol>
        <p className="form-privacy">
          Your answers stay in your browser in this preview. Nothing is sent to
          Future Founders. <Link href="/privacy">Privacy details ↗</Link>
        </p>
      </aside>
      <div className="application-main">
        <div className="form-progress">
          <span>STEP {step + 1} OF 6</span>
          <span>{applicationSteps[step].name}</span>
        </div>
        <progress max={6} value={step + 1} aria-label="Application progress" />
        <h2 ref={heading} tabIndex={-1}>
          {applicationSteps[step].title}
        </h2>
        <p className="form-description">{applicationSteps[step].description}</p>
        <form onSubmit={submit} noValidate>
          {step < 5 ? (
            <div className="form-grid">
              {applicationSteps[step].fields.map((f) => (
                <FormField
                  key={f.id}
                  field={f}
                  value={data[f.id] || ""}
                  onChange={(v) => update(f.id, v)}
                  error={errors[f.id]}
                />
              ))}
            </div>
          ) : (
            <div className="application-review">
              {applicationSteps.slice(0, 5).map((s, i) => (
                <section key={s.name}>
                  <div className="review-heading">
                    <h3>{s.name}</h3>
                    <button type="button" onClick={() => move(i)}>
                      Edit<span className="sr-only"> {s.name}</span> ↗
                    </button>
                  </div>
                  <dl>
                    {s.fields.map((f) => (
                      <div key={f.id}>
                        <dt>{f.label}</dt>
                        <dd>{data[f.id]?.trim() || "Not provided"}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ))}
              <label className="check-field">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  aria-describedby={
                    errors.confirmation ? "confirmation-error" : undefined
                  }
                />
                I have reviewed my answers and understand this preview does not
                send an application.
              </label>
              {errors.confirmation && (
                <p id="confirmation-error" className="field-error">
                  {errors.confirmation}
                </p>
              )}
            </div>
          )}
          {result && (
            <div className="submission-result" role="status">
              <h3>Application prepared.</h3>
              <p>{result}</p>
              <button
                type="button"
                className="button"
                onClick={() =>
                  downloadData(data, "future-founders-application.json")
                }
              >
                Download your application ↓
              </button>
            </div>
          )}
          <div className="form-actions">
            {step > 0 ? (
              <button
                type="button"
                className="back-button"
                onClick={() => move(step - 1)}
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            <button className="button" type="submit" disabled={busy}>
              {busy
                ? "Preparing…"
                : step === 5
                  ? "Prepare application"
                  : "Continue"}{" "}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
        <div className="draft-controls">
          <label className="check-field">
            <input
              type="checkbox"
              checked={save}
              onChange={(e) => toggleSave(e.target.checked)}
            />
            Save my draft on this device
          </label>
          <p>
            Use a personal device. Anyone with access to this browser could see
            a saved draft.
          </p>
          <span aria-live="polite">{storageMessage}</span>
          <div>
            {clearConfirm ? (
              <>
                <span>Clear your answers and saved draft?</span>
                <button
                  type="button"
                  onClick={() => {
                    setData({});
                    toggleSave(false);
                    setResult("");
                    setConfirmed(false);
                    setClearConfirm(false);
                    move(0);
                  }}
                >
                  Yes, clear
                </button>
                <button type="button" onClick={() => setClearConfirm(false)}>
                  Keep draft
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setClearConfirm(true)}>
                Clear draft
              </button>
            )}
            <button
              type="button"
              onClick={() => downloadData(data, "future-founders-draft.json")}
            >
              Download draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const reasons = [
  "Start a Chapter",
  "Join an Existing Chapter",
  "Partnerships",
  "Competitions",
  "Press",
  "General Question",
];
const contactFields: Field[] = [
  { id: "name", label: "Your name", autoComplete: "name" },
  { id: "email", label: "Email address", type: "email", autoComplete: "email" },
  {
    id: "organization",
    label: "School / company",
    optional: true,
    autoComplete: "organization",
  },
  {
    id: "reason",
    label: "What’s on your mind?",
    type: "select",
    options: reasons,
  },
  {
    id: "message",
    label: "Your message",
    type: "textarea",
    minLength: 10,
    maxLength: 4000,
  },
];
export function ContactForm() {
  const [data, setData] = useState<Record<string, string>>({
    reason: "General Question",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const p = new URLSearchParams(window.location.search);
      const reason = p.get("reason");
      if (reason && reasons.includes(reason))
        setData((d) => ({
          ...d,
          reason,
          ...(p.get("chapter")
            ? { message: `I’m interested in the ${p.get("chapter")} chapter. ` }
            : {}),
        }));
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  return (
    <form
      noValidate
      onSubmit={async (e) => {
        e.preventDefault();
        const next: Record<string, string> = {};
        contactFields.forEach((f) => {
          const err = validateField(f, data[f.id] || "");
          if (err) next[f.id] = err;
        });
        setErrors(next);
        if (Object.keys(next).length) {
          document.getElementById(Object.keys(next)[0])?.focus();
          return;
        }
        setBusy(true);
        try {
          const r = await submitContact(data);
          setResult(
            r.status === "local-only"
              ? r.message
              : `Message received. Reference: ${r.reference}`,
          );
        } catch {
          setResult(
            "Your message could not be sent. Your text is still here; download a copy before leaving.",
          );
        } finally {
          setBusy(false);
        }
      }}
    >
      <div className="form-grid">
        {contactFields.map((f) => (
          <FormField
            key={f.id}
            field={f}
            value={data[f.id] || ""}
            error={errors[f.id]}
            onChange={(v) => {
              setData({ ...data, [f.id]: v });
              setErrors({ ...errors, [f.id]: "" });
              setResult("");
            }}
          />
        ))}
      </div>
      <p className="form-privacy">
        Preview mode: this form does not send messages. Your information stays
        in this page unless you download a copy.{" "}
        <Link href="/privacy">Privacy details</Link>.
      </p>
      {result && (
        <div className="submission-result" role="status">
          <h3>Message prepared.</h3>
          <p>{result}</p>
          <button
            type="button"
            className="text-link"
            onClick={() => downloadData(data, "future-founders-message.json")}
          >
            Download message ↓
          </button>
        </div>
      )}
      <button className="button" disabled={busy} type="submit">
        {busy ? "Preparing…" : "Prepare message"}{" "}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
