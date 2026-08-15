type TimelineEntry = {
  date: string;
  heading: string;
  detail: string;
  source: string;
};

const timeline: TimelineEntry[] = [
  {
    date: "July 10, 2026",
    heading: "Unauthorized activity discovered and reported",
    detail: "I discovered four orders that I did not authorize, despite having two-step verification enabled on my Amazon account. I contacted Amazon immediately. Three orders were canceled; the Garmin order continued into shipment.",
    source: "Customer escalation emails; Amazon order correspondence",
  },
  {
    date: "July 10, 2026",
    heading: "Garmin order charged and shipped",
    detail: "Order 112-9902087-6927424 was placed for a PlayBetter Garmin Venu 4 bundle. The item was $559.99, tax was $58.80, and $40.00 in rewards points was applied. The remaining $578.79 was charged to American Express ending in 8003 and shipped to an address in Lynnwood, Washington that I did not authorize.",
    source: "Order confirmation, shipment emails, and preserved order screenshot",
  },
  {
    date: "July 10–11, 2026",
    heading: "Repeated customer-service and leadership escalation",
    detail: "I made multiple efforts to have Amazon stop the transaction and secure the account. I reported a disconnected call, a promised callback that did not occur, and instructions to contact the delivery carrier myself. I also emailed Amazon leadership and followed up when no accountable case owner intervened.",
    source: "Executive escalation correspondence",
  },
  {
    date: "July 11, 2026",
    heading: "Amazon acknowledged possible unauthorized access",
    detail: "Amazon Account Protection stated that an unauthorized party may have accessed the account. Amazon reported removing suspicious devices, disabling the password, reversing account changes, and requiring the account to be secured again. Its notice also stated that Two-Step Verification settings may have been affected.",
    source: "Amazon Account Protection notices",
  },
  {
    date: "July 11, 2026",
    heading: "Package delivered to the unauthorized destination",
    detail: "Amazon's preserved order record shows the Garmin package as delivered on July 11. I did not authorize the destination and did not receive the merchandise.",
    source: "Amazon order-details screenshot",
  },
  {
    date: "July 11 onward",
    heading: "Order records removed from the account view",
    detail: "Amazon's notices state that suspicious pending orders were canceled and removed from the “Your Orders” section. I did not request or consent to removal. I later found the delivered Garmin order and related unauthorized orders unavailable in my ordinary order history, which made the transactions more difficult to review and document. Emails and a screenshot preserve the available record.",
    source: "Account Protection notices; preserved screenshot; customer account experience",
  },
  {
    date: "July 12–13, 2026",
    heading: "Amazon directed the refund request to the card issuer",
    detail: "Amazon advised that the financial institution was responsible for refunding unauthorized charges. On July 13, Amazon Executive Customer Relations confirmed that the Garmin order could be flagged as fraudulent and that this step was complete, but Amazon did not issue a refund and again directed me to the bank.",
    source: "Account Protection email; Executive Customer Relations email",
  },
  {
    date: "July 14, 2026",
    heading: "American Express closed the dispute",
    detail: "American Express closed dispute D-99641426, leaving the $578.79 transaction unresolved. The attached merchant document identifies Amazon Marketplace, an Internet transaction, and the amount, but provides no detailed rationale reconciling the result with Amazon's fraud flag.",
    source: "American Express closure notice and merchant document",
  },
  {
    date: "July 14–August 15, 2026",
    heading: "Amazon did not substantively answer the follow-up",
    detail: "I asked Amazon whether it had contested the card dispute, whether it informed American Express that the order was flagged as fraudulent, whether it would correct conflicting information, and how the amount would be refunded. I also requested preservation of relevant account, authentication, order, support, delivery, and chargeback records. No substantive response addressing those questions was located in the reviewed mailbox through August 15.",
    source: "July 14 follow-up; mailbox review through August 15, 2026",
  },
  {
    date: "August 12–14, 2026",
    heading: "Matter referred to counsel",
    detail: "LegalEASE matched Case 408324 with Lindsey Parlin. Ms. Parlin requested documentation of the charges and the responses received from Amazon and American Express.",
    source: "LegalEASE referral and Parlin Law correspondence",
  },
];

const exhibits = [
  {
    number: "A",
    title: "Amazon order-details screenshot",
    description: "Preserved record of order 112-9902087-6927424, the $578.79 total, payment method, unauthorized destination, and July 11 delivery status.",
    href: "/evidence/amazon-order-details.png",
    action: "View image",
    image: "/evidence/amazon-order-details.png",
    sensitivity: "Contains personal information",
  },
  {
    number: "B",
    title: "Material email correspondence",
    description: "Chronological, non-duplicative record of the order notices, Amazon security communications, customer-service and leadership escalations, American Express closure, and attorney referral.",
    href: "/evidence/email-correspondence-record.txt",
    action: "Read correspondence",
  },
  {
    number: "C",
    title: "American Express closure screenshot",
    description: "Screenshot preserved with the July 14 escalation after American Express closed the card dispute.",
    href: "/evidence/amex-closure-screenshot.png",
    action: "View image",
    image: "/evidence/amex-closure-screenshot.png",
  },
  {
    number: "D",
    title: "American Express merchant document",
    description: "Original one-page PDF identifying Amazon Marketplace, Internet card entry, and the disputed amount of $578.79.",
    href: "/evidence/amex-merchant-document-578-79.pdf",
    action: "View PDF",
  },
  {
    number: "E",
    title: "Evidence index and source notes",
    description: "Inventory describing the source and relevance of each preserved item, including the Amazon notices concerning removal from “Your Orders.”",
    href: "/evidence/evidence-index.txt",
    action: "View index",
  },
];

const emailSnapshots = [
  {
    date: "July 11, 2026 · 9:21 AM PT",
    sender: "Amazon Account Protection Services",
    subject: "Account Recovery: Sign-in and verify your order.",
    significance: "Amazon states that an unauthorized party may have accessed the account, that suspicious devices and account changes were removed, that Two-Step Verification may have been affected, and that unauthorized card charges must be reported to the bank.",
    href: "/evidence/email-snapshots/amazon-account-recovery-jul-11.png",
  },
  {
    date: "July 11, 2026 · 1:29 PM PT",
    sender: "Amazon Account Protection Services",
    subject: "Your Amazon account needs attention",
    significance: "Amazon confirms that it detected unauthorized activity, removed suspicious devices and orders, directs the customer to verify security settings, and again places refund decisions with the bank.",
    href: "/evidence/email-snapshots/amazon-account-needs-attention-jul-11.png",
  },
  {
    date: "July 11, 2026 · 10:49 PM PT",
    sender: "Amazon Account Protection Services",
    subject: "Recent changes to your Amazon.com account",
    significance: "Amazon instructs the customer to review all recent credit- and debit-card activity, report unauthorized charges within 90 days, complete bank dispute forms, and rely on the financial institution for reimbursement.",
    href: "/evidence/email-snapshots/amazon-recent-changes-jul-12.png",
  },
  {
    date: "July 13, 2026 · 6:46 AM PT",
    sender: "Amazon Executive Customer Relations",
    subject: "A Message from Christian with Amazon.com's Executive Customer Relations",
    significance: "Amazon confirms that the fraudulent-order flag is complete but states that the refund process must occur through the bank and that Amazon will not issue a refund unless a bank dispute is submitted.",
    href: "/evidence/email-snapshots/amazon-executive-relations-jul-13.png",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="case-name" href="#top">Case 408324</a>
        <nav aria-label="Case brief navigation">
          <a href="#summary">Executive summary</a>
          <a href="#timeline">Timeline</a>
          <a href="#issues">Issues</a>
          <a href="#evidence">Evidence</a>
        </nav>
        <span>Confidential attorney review</span>
      </header>

      <div className="document-heading">
        <p>Prepared for Lindsey Parlin · August 15, 2026</p>
        <h1>Amazon Account Compromise and Unauthorized Transaction</h1>
        <p className="subtitle">Factual case brief and supporting record</p>
      </div>

      <section className="case-section executive-summary" id="summary">
        <div className="section-label"><span>01</span><h2>Executive Summary</h2></div>
        <div className="section-content">
          <p className="lead">This matter concerns unauthorized access to my Amazon account, an unauthorized order totaling $578.79, Amazon's acknowledgment of account compromise and fraud, and the absence of a refund after both Amazon and American Express declined to resolve the loss.</p>
          <p>On July 10, 2026, I discovered four unauthorized orders in my Amazon account despite having two-step verification enabled. I notified Amazon immediately. Three orders were canceled, but order 112-9902087-6927424—a Garmin smartwatch bundle—was shipped to an address I did not authorize and recorded as delivered the following day.</p>
          <p>Amazon's Account Protection team subsequently stated that an unauthorized party may have accessed my account. Amazon removed suspicious devices and account changes, and Executive Customer Relations confirmed that the Garmin order was flagged as fraudulent. Nevertheless, Amazon refused to issue the $578.79 refund and directed me to American Express. American Express then closed dispute D-99641426, leaving the charge unresolved.</p>
          <p>Amazon also stated that suspicious orders were removed from the “Your Orders” section. I did not request or consent to that removal. The Garmin order and related unauthorized activity later became unavailable through my ordinary order history, limiting my access to evidence concerning the incident. I preserved the available order emails, security notices, screenshot, and American Express documents presented below.</p>
          <p>The scope of the security exposure remains unknown. Amazon has not told me which saved delivery addresses, credit or debit cards, rewards balances, or other account information were viewed, copied, altered, or used by the unauthorized party. Instead, Amazon instructed me to review all recent activity on my credit and debit cards, monitor for unauthorized changes, and report any new charges to each bank. This transfers the continuing monitoring and remediation burden to me without answering what information was exposed or accepting responsibility for the compromise.</p>

          <div className="fact-table" role="table" aria-label="Key case facts">
            <div role="row"><span role="rowheader">Amount at issue</span><strong role="cell">$578.79</strong></div>
            <div role="row"><span role="rowheader">Amazon order</span><strong role="cell">112-9902087-6927424</strong></div>
            <div role="row"><span role="rowheader">Amex dispute</span><strong role="cell">D-99641426</strong></div>
            <div role="row"><span role="rowheader">Incident date</span><strong role="cell">July 10, 2026</strong></div>
            <div role="row"><span role="rowheader">Current status</span><strong role="cell">Unresolved; refund not issued</strong></div>
            <div role="row"><span role="rowheader">Exposure scope</span><strong role="cell">Not disclosed by Amazon</strong></div>
          </div>

          <div className="position-note">
            <h3>Position</h3>
            <p>Amazon controlled the account, order, shipment, security response, and merchant-side chargeback information. It received prompt notice of the unauthorized activity and later flagged the order as fraudulent, yet it shifted recovery to the carrier and card issuer and did not provide a substantive resolution. It also left me responsible for monitoring an unknown number of potentially exposed payment instruments and account records without disclosing the scope of the exposure. I am seeking counsel's advice regarding recovery of the loss, Amazon's handling of the compromised account, removal of order records, the continuing monitoring burden, and preservation of relevant evidence.</p>
          </div>
        </div>
      </section>

      <section className="case-section timeline-section" id="timeline">
        <div className="section-label"><span>02</span><h2>Chronology</h2></div>
        <div className="section-content">
          <p className="section-intro">The following chronology is based on the preserved emails, screenshots, and account records currently available.</p>
          <div className="timeline-list">
            {timeline.map((entry, index) => (
              <article className="timeline-entry" key={`${entry.date}-${entry.heading}`}>
                <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-date">{entry.date}</div>
                <div className="timeline-copy">
                  <h3>{entry.heading}</h3>
                  <p>{entry.detail}</p>
                  <p className="source"><b>Source:</b> {entry.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section issues-section" id="issues">
        <div className="section-label"><span>03</span><h2>Issues for Counsel</h2></div>
        <div className="section-content">
          <ol className="issue-list">
            <li><span>01</span><div><h3>Responsibility for the unauthorized loss</h3><p>Amazon acknowledged possible unauthorized access and completed its fraudulent-order flag, but no refund followed. The interaction between Amazon's findings and American Express's dispute closure remains unexplained.</p></div></li>
            <li><span>02</span><div><h3>Response after prompt notice</h3><p>Amazon received notice while the activity was unfolding. The record should be evaluated to determine whether Amazon took reasonable and timely action to prevent shipment and delivery.</p></div></li>
            <li><span>03</span><div><h3>Unknown scope of exposed addresses and payment information</h3><p>Amazon has not identified which saved delivery addresses, credit or debit cards, rewards balances, or other account information were accessible to the unauthorized party. Amazon instead instructed me to review all recent card activity, monitor for changes, and report future unauthorized charges to the banks. Counsel should consider the continuing monitoring burden, the lack of a defined exposure notice, and the records needed to establish what information was accessed or altered.</p></div></li>
            <li><span>04</span><div><h3>Removal and preservation of order records</h3><p>Amazon removed suspicious orders from the normal account view without recorded consent. Preservation may be necessary for authentication, device, order, support, delivery, internal fraud, and chargeback records.</p></div></li>
            <li><span>05</span><div><h3>Information supplied during the Amex dispute</h3><p>Amazon has not answered whether it contested the dispute or communicated its own fraud determination to American Express. The merchant-side submission and any associated records should be obtained and reviewed.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="case-section evidence-section" id="evidence">
        <div className="section-label"><span>04</span><h2>Evidence</h2></div>
        <div className="section-content">
          <p className="section-intro">The files below are the currently preserved supporting record. Each exhibit opens directly in a separate tab.</p>
          <div className="snapshot-heading">
            <h3>Amazon email snapshots</h3>
            <p>These images were captured from the source messages in Gmail on August 15, 2026. They preserve the visible sender, subject, and message presentation. The complete material email correspondence remains available separately below and contains the full searchable text.</p>
          </div>
          <div className="email-snapshot-grid">
            {emailSnapshots.map((email) => (
              <article className="email-snapshot" key={email.subject}>
                <a href={email.href} target="_blank" rel="noreferrer" aria-label={`Open snapshot of ${email.subject}`}>
                  <img src={email.href} alt={`Gmail snapshot: ${email.subject}`} />
                </a>
                <div>
                  <p className="snapshot-date">{email.date}</p>
                  <h3>{email.subject}</h3>
                  <p className="snapshot-sender">From: {email.sender}</p>
                  <p>{email.significance}</p>
                  <a href={email.href} target="_blank" rel="noreferrer">Open full-size snapshot <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
          <div className="exhibit-list">
            {exhibits.map((exhibit) => (
              <article className="exhibit" key={exhibit.number}>
                <div className="exhibit-number">Exhibit {exhibit.number}</div>
                <div className="exhibit-copy">
                  <div className="exhibit-title">
                    <h3>{exhibit.title}</h3>
                    {exhibit.sensitivity && <span>{exhibit.sensitivity}</span>}
                  </div>
                  <p>{exhibit.description}</p>
                  <a href={exhibit.href} target="_blank" rel="noreferrer">{exhibit.action} <span aria-hidden="true">↗</span></a>
                  {exhibit.image && (
                    <a className="document-preview" href={exhibit.href} target="_blank" rel="noreferrer" aria-label={`Open ${exhibit.title}`}>
                      <img src={exhibit.image} alt={exhibit.title} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="record-note">
            <h3>Record limitation</h3>
            <p>This brief distinguishes Amazon's written statement that suspicious pending orders were removed from “Your Orders” from my separate observation that the delivered Garmin order and related unauthorized transactions later became unavailable in ordinary order history. No conclusion is offered here regarding Amazon's internal reason for that disappearance; preservation and discovery may clarify it.</p>
          </div>
        </div>
      </section>

      <footer>
        <div><strong>Bala Manoghar</strong><span>Prepared for Lindsey Parlin</span></div>
        <div><strong>Case 408324</strong><span>Record reviewed through August 15, 2026</span></div>
      </footer>
    </main>
  );
}
