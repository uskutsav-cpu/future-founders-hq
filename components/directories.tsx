"use client";
import { useState } from "react";
import Link from "next/link";
import { chapters } from "@/data/chapters";
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
