type TimelineItem = {
  date: string;
  title: string;
  description: string;
  type: "incident" | "amazon" | "customer" | "financial" | "legal";
  source?: string;
};

const timeline: TimelineItem[] = [
  {
    date: "Jul 10",
    title: "Unauthorized orders discovered",
    description:
      "Four orders were reported as unauthorized despite two-step verification. Three were canceled; the Garmin order had already entered shipment.",
    type: "incident",
    source: "Customer escalation; Amazon order emails",
  },
  {
    date: "Jul 10",
    title: "$578.79 Garmin order ships",
    description:
      "Order 112-9902087-6927424 was addressed to an unknown Lynnwood location. Amazon's confirmation shows a $559.99 item, $58.80 tax, and a $40 rewards offset.",
    type: "incident",
    source: "Amazon order and shipment confirmations",
  },
  {
    date: "Jul 10–11",
    title: "Escalations go unanswered",
    description:
      "Bala contacted customer service and Amazon leadership, reporting disconnected calls, a missed promised callback, and no accountable case owner.",
    type: "customer",
    source: "Executive escalation emails",
  },
  {
    date: "Jul 11",
    title: "Amazon confirms unauthorized access",
    description:
      "Account Protection Services states that an unauthorized party may have accessed the account and that suspicious devices and account changes were removed.",
    type: "amazon",
    source: "Account Recovery notice",
  },
  {
    date: "Jul 11",
    title: "Amazon removes orders from account history",
    description:
      "Amazon states that suspicious pending orders were canceled and removed from the “Your Orders” page. The record contains no request for or evidence of customer consent.",
    type: "amazon",
    source: "Two Account Protection emails",
  },
  {
    date: "Jul 12",
    title: "Refund responsibility shifted to bank",
    description:
      "Amazon instructs Bala to dispute unauthorized charges with the card issuer and says the financial institution is responsible for refunding them.",
    type: "amazon",
    source: "Account Protection email",
  },
  {
    date: "Jul 13",
    title: "Executive Relations flags order as fraudulent",
    description:
      "Christian confirms the fraudulent-order flagging step is complete, but says Amazon will not issue the refund and again directs Bala to the bank.",
    type: "amazon",
    source: "Amazon Executive Customer Relations",
  },
  {
    date: "Jul 14",
    title: "Amex closes dispute and charge remains",
    description:
      "American Express closes dispute D-99641426. Its attached merchant document records the $578.79 Internet transaction but provides no detailed denial rationale.",
    type: "financial",
    source: "American Express closure notice and attachment",
  },
  {
    date: "Jul 14",
    title: "Amazon asked to resolve contradiction",
    description:
      "Bala asks whether Amazon contested the dispute, whether Amex was told the order was fraudulent, and how Amazon will refund the rebilled amount.",
    type: "customer",
    source: "Follow-up to Amazon and leadership",
  },
  {
    date: "Jul 14–Aug 15",
    title: "No substantive Amazon response located",
    description:
      "The connected mailbox contains no later response addressing the refund, the chargeback evidence, the 2FA failure, or preservation requests.",
    type: "incident",
    source: "Mailbox review through Aug 15, 2026",
  },
  {
    date: "Aug 12–14",
    title: "Attorney accepts referral and requests evidence",
    description:
      "LegalEASE matches Case #408324 with Lindsey Parlin. Ms. Parlin asks for documentation of the charges and company responses.",
    type: "legal",
    source: "LegalEASE and Parlin Law correspondence",
  },
];

const exhibits = [
  {
    id: "E-01",
    title: "Amazon order-details screenshot",
    meta: "PNG · supplied by customer · sensitive",
    description:
      "Shows the disputed order, delivery, payment method, $578.79 total, and unauthorized destination.",
    href: "/evidence/amazon-order-details.png",
    action: "Open image",
    tone: "sensitive",
  },
  {
    id: "E-02",
    title: "American Express closure screenshot",
    meta: "PNG · attached to Amazon escalation",
    description:
      "Screenshot preserved from Bala's July 14 follow-up after the card dispute was closed.",
    href: "/evidence/amex-closure-screenshot.png",
    action: "Open image",
    tone: "standard",
  },
  {
    id: "E-03",
    title: "Amex merchant document — $578.79",
    meta: "PDF · original email attachment",
    description:
      "One-page record identifying Amazon Marketplace, Internet card entry, and the disputed amount.",
    href: "/evidence/amex-merchant-document-578-79.pdf",
    action: "Open PDF",
    tone: "standard",
  },
  {
    id: "E-04",
    title: "Material email correspondence record",
    meta: "TXT · 301 lines · chronological",
    description:
      "Non-duplicative record of Amazon notices, executive escalation, Amex closure, and attorney handoff.",
    href: "/evidence/email-correspondence-record.txt",
    action: "Open record",
    tone: "standard",
  },
  {
    id: "E-05",
    title: "Evidence index and source note",
    meta: "TXT · exhibit inventory",
    description:
      "A concise exhibit list explaining origin, relevance, and the order-removal source record.",
    href: "/evidence/evidence-index.txt",
    action: "Open index",
    tone: "standard",
  },
];

const typeLabels = {
  incident: "Incident",
  amazon: "Amazon",
  customer: "Customer record",
  financial: "Amex",
  legal: "Legal",
};

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Amazon dispute case file home">
          <span className="brand-mark">BM</span>
          <span>
            <strong>Case file</strong>
            <small>Prepared for counsel</small>
          </span>
        </a>
        <nav aria-label="Case file sections">
          <a href="#overview">Overview</a>
          <a href="#timeline">Timeline</a>
          <a href="#evidence">Evidence</a>
          <a href="#questions">Open questions</a>
        </nav>
        <a className="download-button" href="/evidence/email-correspondence-record.txt" download>
          Download record
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div>
            <div className="eyebrow"><span className="live-dot" /> Active consumer dispute · Case #408324</div>
            <h1>Amazon account-takeover<br />and payment dispute</h1>
            <p className="hero-copy">
              A documented account compromise despite two-step verification, an unauthorized Garmin order delivered to an unknown address, and a refund process that left the customer liable after both Amazon and American Express declined resolution.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#evidence">Review evidence</a>
              <a className="secondary-button" href="#timeline">Read full timeline</a>
            </div>
          </div>
          <aside className="case-card" aria-label="Case summary">
            <div className="case-card-heading">
              <span>Current exposure</span>
              <span className="status-pill">Unresolved</span>
            </div>
            <div className="amount">$578.79</div>
            <p>Unauthorized Amazon Marketplace transaction</p>
            <dl>
              <div><dt>Order</dt><dd>112-9902087-6927424</dd></div>
              <div><dt>Incident</dt><dd>July 10, 2026</dd></div>
              <div><dt>Amazon</dt><dd>Fraud flag confirmed</dd></div>
              <div><dt>Amex</dt><dd>Dispute closed</dd></div>
              <div><dt>Latest action</dt><dd>Counsel requested documents</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section overview" id="overview">
        <div className="section-heading">
          <div>
            <span className="section-number">01</span>
            <p className="kicker">Case overview</p>
            <h2>The central contradiction</h2>
          </div>
          <p className="section-intro">Amazon acknowledged the fraud, removed records from the account view, and directed the customer to Amex. Amex left the charge in place.</p>
        </div>

        <div className="contradiction">
          <article>
            <span className="quote-label">Amazon’s written position</span>
            <blockquote>“The order can be flagged as fraudulent. This part of the process is complete.”</blockquote>
            <p>Christian · Executive Customer Relations · July 13</p>
          </article>
          <div className="versus" aria-hidden="true">yet</div>
          <article>
            <span className="quote-label">Financial outcome</span>
            <blockquote>Amazon issued no direct refund, and American Express closed the dispute.</blockquote>
            <p>Amex dispute D-99641426 · July 14</p>
          </article>
        </div>

        <div className="finding-grid">
          <article className="finding important">
            <span className="finding-index">01</span>
            <h3>Unauthorized access acknowledged</h3>
            <p>Amazon’s Account Protection team expressly states that it detected unauthorized activity and removed suspicious devices and account changes.</p>
          </article>
          <article className="finding">
            <span className="finding-index">02</span>
            <h3>Orders removed without recorded consent</h3>
            <p>Amazon says it removed suspicious pending orders from “Your Orders.” No request for or record of customer permission appears in the correspondence.</p>
          </article>
          <article className="finding">
            <span className="finding-index">03</span>
            <h3>Evidence access impaired</h3>
            <p>Bala reports that the delivered Garmin order and related unauthorized orders later became invisible in ordinary order history. Emails and a screenshot now preserve them.</p>
          </article>
          <article className="finding">
            <span className="finding-index">04</span>
            <h3>Security questions unanswered</h3>
            <p>Amazon has not explained the 2FA failure, the scope of exposure, the information supplied to Amex, or whether the account is conclusively secure.</p>
          </article>
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-heading compact">
          <div>
            <span className="section-number">02</span>
            <p className="kicker">Chronology</p>
            <h2>Incident to attorney referral</h2>
          </div>
          <p className="section-intro">Source-based sequence compiled from the connected Gmail mailbox and supplied order screenshot.</p>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article className={`timeline-item ${item.type}`} key={`${item.date}-${item.title}`}>
              <div className="timeline-rail">
                <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="timeline-date">{item.date}<small>2026</small></div>
              <div className="timeline-content">
                <span className="timeline-type">{typeLabels[item.type]}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.source && <small className="source">Source: {item.source}</small>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section order-removal" id="order-removal">
        <div className="callout-tag">Evidence preservation concern</div>
        <div className="callout-grid">
          <div>
            <h2>Amazon made the disputed orders invisible in normal account history.</h2>
            <p className="callout-lead">Amazon’s own notice documents the removal. The customer reports that this included the delivered Garmin order and the related unauthorized orders.</p>
          </div>
          <div className="fact-box">
            <p className="fact-quote">“Canceled any suspicious pending orders and removed them from ‘Your Orders’ section in ‘Your Account.’”</p>
            <span>Amazon Account Protection Services · July 11</span>
          </div>
        </div>
        <div className="fact-notes">
          <p><strong>Documented:</strong> Amazon removed suspicious pending orders from the customer-facing order history as part of its security response.</p>
          <p><strong>No consent record found:</strong> None of the reviewed correspondence asks Bala for permission or records his agreement to removal.</p>
          <p><strong>Customer report:</strong> The Garmin order that shipped and was delivered also became inaccessible in ordinary order history. The supplied screenshot and order emails preserve the record.</p>
        </div>
      </section>

      <section className="section" id="evidence">
        <div className="section-heading compact">
          <div>
            <span className="section-number">03</span>
            <p className="kicker">Document library</p>
            <h2>Evidence ready for review</h2>
          </div>
          <p className="section-intro">Original attachments are preserved alongside a chronological correspondence record. Sensitive exhibits are identified.</p>
        </div>
        <div className="exhibit-list">
          {exhibits.map((exhibit) => (
            <a className="exhibit" href={exhibit.href} target="_blank" rel="noreferrer" key={exhibit.id}>
              <span className="exhibit-id">{exhibit.id}</span>
              <span className="exhibit-body">
                <span className="exhibit-title-row">
                  <strong>{exhibit.title}</strong>
                  {exhibit.tone === "sensitive" && <em>Sensitive</em>}
                </span>
                <small>{exhibit.meta}</small>
                <span>{exhibit.description}</span>
              </span>
              <span className="exhibit-action">{exhibit.action} ↗</span>
            </a>
          ))}
        </div>

        <div className="image-grid">
          <figure>
            <a href="/evidence/amazon-order-details.png" target="_blank" rel="noreferrer">
              <img src="/evidence/amazon-order-details.png" alt="Amazon order-details page for the disputed Garmin order" />
            </a>
            <figcaption><span>E-01</span> Order page preserved before the order became inaccessible in normal account history. Exact delivery address is visible in the original.</figcaption>
          </figure>
          <figure>
            <a href="/evidence/amex-closure-screenshot.png" target="_blank" rel="noreferrer">
              <img src="/evidence/amex-closure-screenshot.png" alt="American Express dispute closure screenshot" />
            </a>
            <figcaption><span>E-02</span> Amex closure record attached to the July 14 follow-up sent to Amazon.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section questions" id="questions">
        <div className="section-heading compact">
          <div>
            <span className="section-number">04</span>
            <p className="kicker">For investigation</p>
            <h2>Unresolved questions</h2>
          </div>
          <p className="section-intro">These requests were raised with Amazon and remain unanswered in the reviewed correspondence.</p>
        </div>
        <ol className="question-list">
          <li><span>01</span><p>How was the account accessed despite two-step verification, and which authentication or recovery event allowed it?</p></li>
          <li><span>02</span><p>Was the saved card credential exposed, or was it usable only inside the compromised Amazon account?</p></li>
          <li><span>03</span><p>Did Amazon or its payment processor submit evidence opposing the Amex dispute?</p></li>
          <li><span>04</span><p>Did Amazon tell Amex that its own fraud process had flagged the order as fraudulent?</p></li>
          <li><span>05</span><p>Why was the delivered disputed order made inaccessible in ordinary order history, and can the complete account record be restored?</p></li>
          <li><span>06</span><p>What logs, session records, device identifiers, address changes, support records, and chargeback materials have been preserved?</p></li>
        </ol>
      </section>

      <section className="attorney-note">
        <div>
          <span className="kicker">Current handoff</span>
          <h2>Prepared in response to counsel’s document request.</h2>
          <p>Ms. Parlin asked for documentation regarding the charges and company responses on August 14, 2026. This case file assembles the current record for initial review.</p>
        </div>
        <a className="primary-button light" href="/evidence/email-correspondence-record.txt" target="_blank" rel="noreferrer">Open correspondence record</a>
      </section>

      <footer>
        <p><strong>Amazon dispute case file</strong> · Prepared August 15, 2026</p>
        <p>This dashboard summarizes source documents and customer-reported facts. It is not a statement of legal conclusions.</p>
      </footer>
    </main>
  );
}
