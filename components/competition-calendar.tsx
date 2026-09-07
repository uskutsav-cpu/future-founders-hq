"use client";
import { useState, useSyncExternalStore } from "react";
import {
  competitions,
  calendarDays,
  shiftMonth,
  formatDate,
  competitionStatus,
} from "@/data/competitions";
import { CompetitionCard } from "@/components/competition-card";
function subscribeDay(callback: () => void) {
  const timer = setInterval(callback, 60000);
  return () => clearInterval(timer);
}
function localDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function CompetitionCalendar() {
  const initialMonth = competitions[0]?.deadline.slice(0, 7) || "2026-09";
  const [month, setMonth] = useState(initialMonth);
  const [view, setView] = useState("Calendar");
  const [query, setQuery] = useState("");
  const [eligibility, setEligibility] = useState("All");
  const [format, setFormat] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("deadline");
  const today = useSyncExternalStore(subscribeDay, localDay, () => "");
  const filtered = competitions
    .filter(
      (c) =>
        c.title.toLowerCase().includes(query.trim().toLowerCase()) &&
        (eligibility === "All" ||
          c.eligibility === eligibility ||
          c.eligibility === "Both") &&
        (format === "All" || c.format === format) &&
        (category === "All" || c.category === category) &&
        (status === "All" || competitionStatus(c, today) === status),
    )
    .sort((a, b) =>
      (sort === "deadline" ? a.deadline : a.date || "9999").localeCompare(
        sort === "deadline" ? b.deadline : b.date || "9999",
      ),
    );
  const visible =
    view === "Calendar"
      ? filtered.filter(
          (c) => c.deadline.startsWith(month) || c.date?.startsWith(month),
        )
      : filtered;
  const monthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(month + "-01T12:00:00Z"));
  function resetFilters() {
    setQuery("");
    setEligibility("All");
    setFormat("All");
    setCategory("All");
    setStatus("All");
  }
  return (
    <div className="competition-browser">
      <div className="competition-browser-toolbar">
        <div>
          <h2>Competition calendar</h2>
          <p>Signup deadlines and confirmed competition dates.</p>
        </div>
        <div className="filter-tabs" aria-label="Competition view">
          {["Calendar", "List"].map((v) => (
            <button
              type="button"
              key={v}
              aria-pressed={view === v}
              onClick={() => setView(v)}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <details className="competition-search-options">
        <summary>Search & filter competitions</summary>
        <div className="competition-filter-controls">
          <label>
            Search
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search competitions"
            />
          </label>
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
          <label>
            Sort by
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="deadline">Soonest deadline</option>
              <option value="date">Competition date</option>
            </select>
          </label>
        </div>
        <button type="button" className="calendar-reset" onClick={resetFilters}>
          Clear filters
        </button>
      </details>
      <div
        className={`competition-calendar-layout ${view === "List" ? "competition-list-view" : ""}`}
      >
        {view === "Calendar" && (
          <section
            className="month-calendar"
            aria-label={`${monthName} competition calendar`}
          >
            <div className="month-heading">
              <h3 aria-live="polite">{monthName}</h3>
              <div>
                <button
                  type="button"
                  onClick={() => setMonth(shiftMonth(month, -1))}
                  aria-label="Previous month"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setMonth(shiftMonth(month, 1))}
                  aria-label="Next month"
                >
                  →
                </button>
              </div>
            </div>
            <div className="calendar-weekdays" aria-hidden="true">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="calendar-days">
              {calendarDays(month).map((date, i) => {
                const items = date
                  ? filtered.filter(
                      (c) => c.deadline === date || c.date === date,
                    )
                  : [];
                return (
                  <div
                    key={date || `blank-${i}`}
                    className={`calendar-day ${items.length ? "has-deadline" : ""} ${date === today ? "is-today" : ""}`}
                  >
                    {date &&
                      (items.length ? (
                        <a
                          href={`#competition-${items[0].id}`}
                          aria-label={`${formatDate(date)}: ${items.map((c) => `${c.title} ${c.deadline === date ? "signup deadline" : "competition date"}`).join(", ")}`}
                        >
                          <span>{Number(date.slice(-2))}</span>
                          <small>
                            {items.some((c) => c.deadline === date)
                              ? "Sign up"
                              : "Event"}
                          </small>
                        </a>
                      ) : (
                        <time dateTime={date}>{Number(date.slice(-2))}</time>
                      ))}
                  </div>
                );
              })}
            </div>
            <p className="calendar-legend">
              <span aria-hidden="true" /> Highlighted dates link to competition
              details.
            </p>
            {month !== initialMonth && (
              <button
                className="calendar-reset"
                type="button"
                onClick={() => setMonth(initialMonth)}
              >
                Return to{" "}
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(initialMonth + "-01T12:00:00Z"))}{" "}
                →
              </button>
            )}
          </section>
        )}
        <section
          className="calendar-listings"
          aria-label="Competition listings"
        >
          <p className="calendar-results" role="status">
            {visible.length}{" "}
            {visible.length === 1 ? "competition" : "competitions"}
            {view === "Calendar" ? ` · ${monthName}` : ""}
          </p>
          {visible.map((c) => (
            <CompetitionCard c={c} today={today} key={c.id} />
          ))}
          {!visible.length && (
            <div className="calendar-empty">
              <h3>No competitions to show.</h3>
              <p>
                {filtered.length
                  ? "There are no published deadlines or competition dates in this month."
                  : "No opportunities match these filters."}
              </p>
              <button
                className="calendar-reset"
                onClick={() => {
                  resetFilters();
                  setMonth(initialMonth);
                }}
                type="button"
              >
                Show all announced competitions →
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
