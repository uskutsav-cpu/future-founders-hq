import { faqs } from "@/data/faqs";
export function FAQAccordion({
  indices = [0, 1, 2, 3, 8],
}: {
  indices?: number[];
}) {
  return (
    <section className="container section faq-section">
      <div>
        <p className="eyebrow">A FEW GOOD QUESTIONS</p>
        <h2>
          Before you
          {" "}<br />
          jump in.
        </h2>
      </div>
      <div>
        {indices.map((i) => (
          <details key={faqs[i].q} className="faq">
            <summary>
              {faqs[i].q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faqs[i].a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
