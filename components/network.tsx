import Link from "next/link";
import { chapters } from "@/data/chapters";
const countries = [...new Set(chapters.map(c => c.country))];
export function Network() {
  return (
    <div className="global-network">
      <div className="network-top">
        <span className="eyebrow">LOCAL ROOTS. SHARED AMBITION.</span>
        <span>{String(countries.length).padStart(2, "0")} countries represented</span>
      </div>
      {countries.map((country, i) => (
        <div className="country-row" key={country}>
          <div className="country-name">
            <span>0{i + 1}</span>
            <h3>
              {country === "United Arab Emirates" ? "UAE / Dubai" : country}
            </h3>
          </div>
          <div className="country-chapters">
            {chapters
              .filter((c) => c.country === country)
              .map((c) => (
                <Link key={c.id} href={`/chapters/${c.slug}`}>
                  <span>{c.name}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
          </div>
        </div>
      ))}
      <div className="network-bottom">
        <span>Different schools. The same drive to build.</span>
        <Link href="/start-a-chapter">
          Add your school <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
