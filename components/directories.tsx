"use client";
import { useState } from "react";
import Link from "next/link";
import { chapters } from "@/data/chapters";
import { competitions } from "@/data/competitions";
import { CompetitionCard } from "@/components/competition-card";
export function ChapterDirectory() {
  const [q, setQ] = useState("");
  const [type, setType] = useState("All");
  const found = chapters.filter(
    (c) =>
      (type === "All" || c.type === type) &&
      [c.name, c.school, c.district, c.city, c.state, c.country]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase().trim()),
  );
  return (
    <div className="directory">
      <div className="directory-toolbar">
        <div className="filter-tabs" aria-label="Chapter type">
          {["All", "High School", "College"].map((t) => (
            <button
              key={t}
              aria-pressed={type === t}
              onClick={() => setType(t)}
            >
              {t}
              {t === "All" && <span>{chapters.length}</span>}
            </button>
          ))}
        </div>
        <div className="search-field">
          <label htmlFor="chapter-search" className="sr-only">
            Search by school, city, or state
          </label>
          <span aria-hidden="true">⌕</span>
          <input
            id="chapter-search"
            type="search"
            placeholder="Search by school, city, or state"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>
      <div className="results-meta">
        <span aria-live="polite">
          {found.length} {found.length === 1 ? "chapter" : "chapters"}
        </span>
        <span>Student-led. Locally built.</span>
      </div>
      <div className="chapter-table-heading">
        <span>CHAPTER / SCHOOL</span>
        <span>LOCATION</span>
        <span>TYPE</span>
        <span>STATUS</span>
      </div>
      {found.map((c) => (
        <Link
          href={"/chapters/" + c.slug}
          className={`chapter-row ${c.pioneer ? "chapter-row-pioneer" : ""}`}
          key={c.id}
        >
          <span className="chapter-name">
            <span className="chapter-initial" aria-hidden="true">
              {c.name
                .split(" ")
                .slice(0, 2)
                .map((x) => x[0])
                .join("")}
            </span>
            <span>
              <strong>{c.name}</strong>
              <small>
                {c.pioneer
                  ? "Pioneer chapter · Frisco ISD"
                  : c.district ||
                    (c.school
                      ? "Future Founders chapter"
                      : "School details to come")}
              </small>
            </span>
          </span>
          <span className="chapter-location">
            {c.city || c.country}
            <small>{c.city ? c.state || c.country : ""}</small>
          </span>
          <span className="chapter-type">{c.type}</span>
          <span className="chapter-status">
            <i />
            {c.status}
          </span>
          <span className="row-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      ))}
      {!found.length && (
        <div className="filter-empty">
          <h3>No chapters found.</h3>
          <p>Try another school, city, or state. Your school could be next.</p>
          <button
            onClick={() => {
              setQ("");
              setType("All");
            }}
          >
            Clear filters →
          </button>
        </div>
      )}
    </div>
  );
}
export function CompetitionDirectory() {
  const [q, setQ] = useState("");
  const [eligibility, setEligibility] = useState("All");
  const [format, setFormat] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("deadline");
  const filtered = competitions
    .filter(
      (c) =>
        c.title.toLowerCase().includes(q.toLowerCase()) &&
        (eligibility === "All" ||
          c.eligibility === eligibility ||
          (c.eligibility === "Both" && eligibility !== "Both")) &&
        (format === "All" || c.format === format) &&
        (category === "All" || c.category === category) &&
        (status === "All" || c.status === status),
    )
    .sort((a, b) =>
      (sort === "deadline" ? a.deadline : a.date).localeCompare(
        sort === "deadline" ? b.deadline : b.date,
      ),
    );
  const reset = () => {
    setQ("");
    setEligibility("All");
    setFormat("All");
    setCategory("All");
    setStatus("All");
  };
  return (
    <div>
      <div className="competition-filters">
        <div className="search-field">
          <label htmlFor="competition-search" className="sr-only">
            Search competitions
          </label>
          <span aria-hidden="true">⌕</span>
          <input
            id="competition-search"
            type="search"
            placeholder="Search competitions"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="select-filters">
          {[
            {
              label: "Eligibility",
              value: eligibility,
              set: setEligibility,
              options: ["All", "High School", "College", "Both"],
            },
            {
              label: "Format",
              value: format,
              set: setFormat,
              options: ["All", "Online", "In Person", "Hybrid"],
            },
            {
              label: "Type",
              value: category,
              set: setCategory,
              options: [
                "All",
                "Pitch",
                "Entrepreneurship",
                "Investment",
                "Case",
                "Economics",
                "Innovation",
                "Business",
                "Technology",
              ],
            },
            {
              label: "Status",
              value: status,
              set: setStatus,
              options: ["All", "Open", "Upcoming", "Closed"],
            },
          ].map((f) => (
            <label key={f.label}>
              {f.label}
              <select value={f.value} onChange={(e) => f.set(e.target.value)}>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>
      <div className="results-meta">
        <span aria-live="polite">{filtered.length} opportunities</span>
        <label>
          Sort by{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="deadline">Soonest deadline</option>
            <option value="date">Event date</option>
          </select>
        </label>
      </div>
      <div className="competition-grid">
        {filtered.map((c) => (
          <CompetitionCard key={c.id} c={c} />
        ))}
      </div>
      {!filtered.length && (
        <div className="filter-empty">
          <h3>No matches this time.</h3>
          <p>Try a different combination of filters.</p>
          <button onClick={reset}>Clear filters →</button>
        </div>
      )}
    </div>
  );
}
