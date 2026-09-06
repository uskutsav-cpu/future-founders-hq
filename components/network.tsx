import Link from "next/link";
import { chapters, activeChapterCount } from "@/data/chapters";
export function Network() {
  return (
    <div className="network-display">
      <div className="network-display-top">
        <span className="eyebrow">THE NETWORK, AT A GLANCE</span>
        <span className="network-live">
          <i />
          {activeChapterCount} active
        </span>
      </div>
      <div className="network-regions">
        {["West", "Midwest", "South", "Northeast"].map((region, i) => (
          <div className="network-region" key={region}>
            <div className="region-heading">
              <span>0{i + 1}</span>
              <h3>{region}</h3>
              <span>{chapters.filter((c) => c.region === region).length}</span>
            </div>
            {chapters
              .filter((c) => c.region === region)
              .slice(0, 4)
              .map((c) => (
                <Link href={"/chapters/" + c.slug} key={c.id}>
                  <span className="node" />
                  <span>
                    {c.city}
                    <small>{c.name.replace(" Chapter", "")}</small>
                  </span>
                  <span className="network-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            {chapters.filter((c) => c.region === region).length > 4 && (
              <Link href="/chapters">
                + {chapters.filter((c) => c.region === region).length - 4} more
                chapters →
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="network-display-bottom">
        <span>Different campuses. Shared ambition.</span>
        <span>Sample chapter network</span>
      </div>
    </div>
  );
}
