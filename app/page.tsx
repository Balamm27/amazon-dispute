import {
  BadgeDollarSign,
  CalendarClock,
  FileText,
  FolderOpen,
  Mail,
  Scale,
  ShieldAlert,
} from "lucide-react";

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
    date: "July 10-11, 2026",
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
    date: "July 12-13, 2026",
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
    date: "July 14-August 15, 2026",
    heading: "Amazon did not substantively answer the follow-up",
    detail: "I asked Amazon whether it had contested the card dispute, whether it informed American Express that the order was flagged as fraudulent, whether it would correct conflicting information, and how the amount would be refunded. I also requested preservation of relevant account, authentication, order, support, delivery, and chargeback records. No substantive response addressing those questions was located in the reviewed mailbox through August 15.",
    source: "July 14 follow-up; mailbox review through August 15, 2026",
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
    significance: "Amazon states that an unauthorized party may have accessed my account, that suspicious devices and account changes were removed, that Two-Step Verification may have been affected, and that unauthorized card charges must be reported to the bank.",
    href: "/evidence/email-snapshots/amazon-account-recovery-jul-11.png",
  },
  {
    date: "July 11, 2026 · 1:29 PM PT",
    sender: "Amazon Account Protection Services",
    subject: "Your Amazon account needs attention",
    significance: "Amazon confirms that it acted after I contacted the company, directs me to verify my security settings, and again places responsibility for refund decisions with the bank.",
    href: "/evidence/email-snapshots/amazon-account-needs-attention-jul-11.png",
  },
  {
    date: "July 11, 2026 · 10:49 PM PT",
    sender: "Amazon Account Protection Services",
    subject: "Recent changes to your Amazon.com account",
    significance: "Amazon instructs me to review all recent credit- and debit-card activity, report unauthorized charges within 90 days, complete bank dispute forms, and rely on the financial institution for reimbursement.",
    href: "/evidence/email-snapshots/amazon-recent-changes-jul-12.png",
  },
  {
    date: "July 13, 2026 · 6:46 AM PT",
    sender: "Amazon Executive Customer Relations",
    subject: "A Message from Christian with Amazon.com's Executive Customer Relations",
    significance: "This three-message thread contains Christian's response for Amazon and both of my follow-up messages. It documents Amazon's fraud flag, its referral to the bank, my unanswered security questions, the monitoring burden placed on me, the Amex denial, and my requests to preserve evidence.",
    href: "/evidence/email-snapshots/amazon-executive-relations-jul-13.png",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="case-name" href="#top">Case 408324</a>
        <nav aria-label="Case brief navigation">
          <a href="#summary"><FileText aria-hidden="true" /> <span>Executive summary</span></a>
          <a href="#timeline"><CalendarClock aria-hidden="true" /> <span>Timeline</span></a>
          <a href="#issues"><Scale aria-hidden="true" /> <span>Issues</span></a>
          <a href="#evidence"><FolderOpen aria-hidden="true" /> <span>Evidence</span></a>
        </nav>
        <span>Confidential attorney review</span>
      </header>

      <div className="document-heading">
        <div className="heading-copy">
          <p>Prepared for independent legal review · September 9, 2026</p>
          <h1>Unresolved Amazon Account Security Incident</h1>
          <p className="subtitle">Account takeover, unknown data exposure, ignored escalation, and unreimbursed financial loss</p>
        </div>
        <aside className="case-status" aria-label="Current case status">
          <div className="status-heading">
            <ShieldAlert aria-hidden="true" />
            <div><p>Primary legal concern</p><strong>Unresolved account takeover, deficient post-notice response, and resulting damages</strong></div>
          </div>
          <p className="status-summary">The record raises issues concerning reasonable account security, incident investigation and notice, mitigation, remediation, preservation of evidence, and consumer harm. The scope of any exposure remains undisclosed.</p>
          <dl>
            <div><dt>Unauthorized access</dt><dd>Fraudulent order flagged</dd></div>
            <div><dt>Potential data exposure</dt><dd>Scope undisclosed</dd></div>
            <div><dt>Post-notice response</dt><dd>No substantive resolution</dd></div>
            <div><dt>Remediation</dt><dd>Incomplete and unverified</dd></div>
            <div><dt>Evidence preservation</dt><dd>Order records removed from view</dd></div>
            <div><dt>Actual financial harm</dt><dd>$578.79 unreimbursed</dd></div>
          </dl>
        </aside>
      </div>

      <section className="case-section executive-summary" id="summary">
        <div className="section-label"><div className="section-icon"><FileText aria-hidden="true" /></div><span>01</span><h2>Executive Summary</h2></div>
        <div className="section-content">
          <p className="lead">This matter is principally about Amazon's failure to investigate, explain, and meaningfully respond after a serious account takeover. The unauthorized $578.79 charge is one direct financial consequence of a larger unresolved security incident.</p>
          <div className="primary-finding">
            <ShieldAlert aria-hidden="true" />
            <div><h3>The central issue</h3><p>An unauthorized person entered my account, added or used an unknown address, placed multiple orders, and used a payment method stored with Amazon. Amazon has not told me what personal and payment information was accessible, has not confirmed that every unauthorized change was removed, and has not provided a substantive answer despite repeated emails to customer service and senior leadership.</p></div>
          </div>
          <p>On July 10, 2026, I discovered four unauthorized orders in my Amazon account despite having two-step verification enabled. Amazon did not proactively discover the fraud and alert me. Its account-protection response followed my repeated calls and requests for escalation after I informed Amazon of the unauthorized activity. Three orders were canceled, but order 112-9902087-6927424, a Garmin smartwatch bundle, was shipped to an address I did not authorize and recorded as delivered the following day.</p>
          <p>During those initial contacts, Amazon customer service did not appear to have a coherent process for handling the incident. I reported disconnected calls, promised callbacks that did not occur, and representatives directing me to contact FedEx and my bank myself. I was the victim reporting fraud through Amazon's platform, yet Amazon placed the investigation, shipment intervention, financial recovery, and continuing monitoring work back on me.</p>
          <p>Amazon's Account Protection team subsequently stated that an unauthorized party may have accessed my account. Amazon removed suspicious devices and account changes, and Executive Customer Relations confirmed that the Garmin order was flagged as fraudulent. Nevertheless, Amazon refused to issue the $578.79 refund and directed me to American Express. American Express then closed dispute D-99641426, leaving the charge unresolved.</p>
          <p>Amazon also stated that suspicious orders were removed from the “Your Orders” section. I did not request or consent to that removal. The Garmin order and related unauthorized activity later became unavailable through my ordinary order history, limiting my access to evidence concerning the incident. I preserved the available order emails, security notices, screenshot, and American Express documents presented below.</p>
          <p>The scope of the security exposure remains unknown. Amazon has not told me which saved delivery addresses, credit or debit cards, rewards balances, or other account information were viewed, copied, altered, or used by the unauthorized party. Instead, Amazon instructed me to review all recent activity on my credit and debit cards, monitor for unauthorized changes, and report any new charges to each bank. This transfers the continuing monitoring and remediation burden to me without answering what information was exposed or accepting responsibility for the compromise.</p>

          <div className="fact-table" role="table" aria-label="Key case facts">
            <div role="row"><BadgeDollarSign aria-hidden="true" /><span role="rowheader">Amount at issue</span><strong role="cell">$578.79</strong></div>
            <div role="row"><span role="rowheader">Amazon order</span><strong role="cell">112-9902087-6927424</strong></div>
            <div role="row"><span role="rowheader">Amex dispute</span><strong role="cell">D-99641426</strong></div>
            <div role="row"><span role="rowheader">Incident date</span><strong role="cell">July 10, 2026</strong></div>
            <div role="row"><span role="rowheader">Current status</span><strong role="cell">Unresolved; refund not issued</strong></div>
            <div role="row"><span role="rowheader">Exposure scope</span><strong role="cell">Not disclosed by Amazon</strong></div>
          </div>

          <div className="position-note">
            <h3>Position</h3>
            <p>Amazon controlled the account, order, shipment, security response, and merchant-side chargeback information. It received prompt notice from me and later flagged the order as fraudulent, yet it shifted recovery to the carrier and card issuer and did not provide a substantive resolution. It also left me responsible for monitoring an unknown number of potentially exposed payment instruments and account records without disclosing the scope of the exposure. For a company that publicly emphasizes customer service, the absence of a capable response, ownership, and follow-through was particularly concerning. I am seeking counsel's advice regarding recovery of the loss, Amazon's handling of the compromised account, removal of order records, the continuing monitoring burden, and preservation of relevant evidence.</p>
          </div>
        </div>
      </section>

      <section className="case-section timeline-section" id="timeline">
        <div className="section-label"><div className="section-icon"><CalendarClock aria-hidden="true" /></div><span>02</span><h2>Chronology</h2></div>
        <div className="section-content">
          <p className="section-intro">The following chronology is based on the preserved emails, screenshots, and account records currently available.</p>
          <div className="timeline-list">
            {timeline.map((entry, index) => (
              <article className="timeline-entry" key={`${entry.date}-${entry.heading}`}>
                <div className="timeline-index"><CalendarClock aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div>
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
        <div className="section-label"><div className="section-icon"><Scale aria-hidden="true" /></div><span>03</span><h2>Issues for Counsel</h2></div>
        <div className="section-content">
          <ol className="issue-list">
            <li><div className="issue-marker"><ShieldAlert aria-hidden="true" /><span>01</span></div><div><h3>Responsibility for the unauthorized loss</h3><p>Amazon acknowledged possible unauthorized access and completed its fraudulent-order flag, but no refund followed. The interaction between Amazon's findings and American Express's dispute closure remains unexplained.</p></div></li>
            <li><div className="issue-marker"><ShieldAlert aria-hidden="true" /><span>02</span></div><div><h3>Customer-service failure after prompt notice</h3><p>Amazon did not proactively identify and resolve this incident. Its security response followed my repeated calls and requests for escalation. I reported that frontline representatives appeared uncertain how to handle the account takeover, redirected me to FedEx and the bank, disconnected calls, and failed to provide promised callbacks. The record should be evaluated to determine whether Amazon had and followed a reasonable process after receiving notice while the activity and shipment were still unfolding.</p></div></li>
            <li><div className="issue-marker"><ShieldAlert aria-hidden="true" /><span>03</span></div><div><h3>Unknown scope of exposed addresses and payment information</h3><p>Amazon has not identified which saved delivery addresses, credit or debit cards, rewards balances, or other account information were accessible to the unauthorized party. Amazon instead instructed me to review all recent card activity, monitor for changes, and report future unauthorized charges to the banks. Counsel should consider the continuing monitoring burden, the lack of a defined exposure notice, and the records needed to establish what information was accessed or altered.</p></div></li>
            <li><div className="issue-marker"><ShieldAlert aria-hidden="true" /><span>04</span></div><div><h3>Removal and preservation of order records</h3><p>Amazon removed suspicious orders from the normal account view without recorded consent. Preservation may be necessary for authentication, device, order, support, delivery, internal fraud, and chargeback records.</p></div></li>
            <li><div className="issue-marker"><ShieldAlert aria-hidden="true" /><span>05</span></div><div><h3>Information supplied during the Amex dispute</h3><p>Amazon has not answered whether it contested the dispute or communicated its own fraud determination to American Express. The merchant-side submission and any associated records should be obtained and reviewed.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="case-section evidence-section" id="evidence">
        <div className="section-label"><div className="section-icon"><FolderOpen aria-hidden="true" /></div><span>04</span><h2>Evidence</h2></div>
        <div className="section-content">
          <p className="section-intro">The exhibits below comprise the supporting record presently available to me. Each exhibit may be opened in a separate tab for review.</p>
          <div className="snapshot-heading">
            <h3><Mail aria-hidden="true" /> Amazon email correspondence</h3>
            <p>These exhibits reproduce the material correspondence in chronological order, including sender, recipient, date, subject, and message content. The July 13 exhibit contains Amazon's response and both of my follow-up messages in the same thread. I have also retained the original Gmail messages and a searchable correspondence record.</p>
          </div>
          <div className="email-snapshot-grid">
            {emailSnapshots.map((email) => (
              <article className="email-snapshot" key={email.subject}>
                <a href={email.href} target="_blank" rel="noreferrer" aria-label={`Open email exhibit: ${email.subject}`}>
                  <img src={email.href} alt={`Email exhibit: ${email.subject}`} />
                </a>
                <div>
                  <p className="snapshot-date">{email.date}</p>
                  <h3>{email.subject}</h3>
                  <p className="snapshot-sender">From: {email.sender}</p>
                  <p>{email.significance}</p>
                  <a href={email.href} target="_blank" rel="noreferrer">View full email exhibit <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
          <div className="exhibit-list">
            {exhibits.map((exhibit) => (
              <article className="exhibit" key={exhibit.number}>
                <div className="exhibit-number"><FolderOpen aria-hidden="true" /> <span>Exhibit {exhibit.number}</span></div>
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
        <div><strong>Bala Manoghar</strong><span>Prepared for independent legal review</span></div>
        <div><strong>Case 408324</strong><span>Record reviewed through August 15, 2026</span></div>
      </footer>
    </main>
  );
}
