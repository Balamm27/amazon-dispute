type StoryItem = {
  date: string;
  title: string;
  body: string[];
  proof: string;
  emphasis?: string;
};

const story: StoryItem[] = [
  {
    date: "July 10, 2026",
    title: "Someone got into my Amazon account and used my money.",
    body: [
      "Despite the fact that I had two-step verification enabled, an unauthorized person accessed my Amazon account and placed four orders using the payment methods and rewards saved in my account. I caught the fraud and contacted Amazon immediately. Three orders were canceled, but Amazon allowed one expensive order to continue through shipment.",
      "The order was for a PlayBetter Garmin Venu 4 smartwatch bundle. The item cost $559.99, Amazon added $58.80 in tax, and $40.00 of my rewards points were used. The final charge was $578.79 on my American Express card ending in 8003. The package was sent to an address in Lynnwood, Washington that I did not authorize.",
    ],
    proof: "Amazon order confirmation, shipment emails, and order-details screenshot",
    emphasis: "$578.79 taken through my compromised Amazon account",
  },
  {
    date: "July 10–11, 2026",
    title: "I repeatedly asked Amazon to stop the fraud. Its customer service failed me.",
    body: [
      "I made multiple attempts to get Amazon customer service to take control of the situation before the loss became permanent. Instead of protecting my account and stopping the shipment, I was disconnected, told to contact the delivery carrier myself, and promised a callback that never came.",
      "Amazon had the account information, the order information, the delivery information, and notice from me—the account holder—that the transaction was fraudulent. Yet its representatives pushed the work back onto me and sent me toward FedEx and American Express to recover money that Amazon had allowed an unauthorized person to take.",
    ],
    proof: "My executive escalation emails describing the calls and missed callback",
  },
  {
    date: "July 10–11, 2026",
    title: "I escalated to Amazon leadership. Nobody took ownership.",
    body: [
      "When ordinary customer service would not help, I emailed Amazon leadership and followed up again. I explained that my account had been compromised, that an unauthorized order was moving through Amazon's system, and that I needed urgent intervention. My messages did not produce an immediate response or a responsible case owner.",
      "This was not a hidden problem that Amazon discovered too late. I was actively warning the company while the events were unfolding. Even after repeated escalation, Amazon did not give me the basic help I expected from a company holding my saved payment information.",
    ],
    proof: "Leadership escalation correspondence dated July 10 and July 11",
  },
  {
    date: "July 11, 2026",
    title: "Amazon admitted that an unauthorized person may have accessed my account.",
    body: [
      "Amazon's own Account Protection team later wrote that an unauthorized party may have accessed my account. Amazon said it removed suspicious devices, disabled my password, reversed changes, and required me to secure the account again. Its notice also acknowledged that my Two-Step Verification settings may have been affected.",
      "That admission matters. Amazon's own security process treated this as unauthorized access, not buyer's remorse or a normal order dispute. Nevertheless, acknowledging the compromise did not lead Amazon to return my money.",
    ],
    proof: "Two Amazon Account Protection notices dated July 11",
    emphasis: "Amazon itself treated the account activity as unauthorized",
  },
  {
    date: "July 11, 2026",
    title: "Amazon let the package reach the unauthorized destination.",
    body: [
      "The Garmin package was recorded as delivered on July 11 to the unauthorized Lynnwood destination. I did not receive it. By this point, Amazon had been told about the fraud and had begun account-protection actions, but its system still completed the delivery that caused the $578.79 loss.",
    ],
    proof: "Amazon order-details screenshot showing “Delivered July 11”",
  },
  {
    date: "July 11 onward",
    title: "Amazon removed the orders from my Orders page without asking me.",
    body: [
      "Amazon's written notices say it canceled suspicious pending orders and removed them from the “Your Orders” section of my account. I never asked Amazon to remove those records, and nothing in the correspondence shows that Amazon sought or received my permission.",
      "I also found that the delivered Garmin order and related unauthorized orders were no longer visible through my ordinary order history. By making the orders invisible to me, Amazon made it harder for me to see, document, and pursue the transactions at the center of this dispute. Fortunately, I preserved emails and a screenshot of the Garmin order before the evidence disappeared from normal view.",
    ],
    proof: "Amazon Account Protection notices; preserved order screenshot; my account experience",
    emphasis: "Amazon made critical order evidence invisible inside my own account",
  },
  {
    date: "July 12–13, 2026",
    title: "Amazon called the order fraudulent—then refused to refund me.",
    body: [
      "Amazon first told me that my financial institution was responsible for refunding unauthorized charges. On July 13, Christian from Amazon Executive Customer Relations confirmed that the order could be flagged as fraudulent and that this part of Amazon's process was complete.",
      "That response was outrageous to me. Amazon accepted the fraud flag, but still would not restore the $578.79. Instead, Amazon told me to go to my bank. The company that controlled the account, accepted the order, processed it, and allowed the delivery washed its hands of the financial result and made me chase my own money.",
    ],
    proof: "Amazon Account Protection email and Executive Customer Relations email",
    emphasis: "Amazon confirmed the fraud flag but left me with the loss",
  },
  {
    date: "July 14, 2026",
    title: "American Express closed the dispute, leaving the charge with me.",
    body: [
      "I followed Amazon's direction and disputed the $578.79 with American Express. American Express then closed dispute D-99641426 and left or placed the amount back on my account. The merchant document attached to the closure identifies Amazon Marketplace, an Internet transaction, and the $578.79 amount, but it does not provide a meaningful explanation for why I should be responsible for an order Amazon had already flagged as fraudulent.",
      "Amazon had sent me to American Express. American Express sent me back with the charge unresolved. I was trapped between two large companies, while neither accepted responsibility and I remained the person who lost the money.",
    ],
    proof: "American Express closure screenshot and merchant document",
  },
  {
    date: "July 14–August 15, 2026",
    title: "I confronted Amazon with the contradiction. Amazon stopped responding.",
    body: [
      "After American Express closed the dispute, I wrote back to Amazon and its leadership. I asked whether Amazon had contested my dispute, whether Amazon had told American Express that its own fraud team flagged the order, whether Amazon would correct any conflicting information, and how it planned to return my money. I also asked Amazon to preserve the relevant account, device, authentication, order, support, delivery, and chargeback records.",
      "I have found no substantive Amazon response answering those questions. Amazon did not explain how two-step verification failed, what it told American Express, why it refused a refund after flagging the order as fraudulent, or why the relevant orders became invisible in my account. I kept emailing leadership, and nobody bothered to resolve the problem.",
    ],
    proof: "My July 14 follow-up and mailbox record reviewed through August 15",
    emphasis: "Amazon has never given me a substantive resolution",
  },
  {
    date: "August 12–14, 2026",
    title: "I turned to counsel because Amazon would not take responsibility.",
    body: [
      "LegalEASE matched my matter, Case #408324, with Ms. Lindsey Parlin. Ms. Parlin asked me for the records showing the charges and the companies' responses. I prepared this page so she can see the complete sequence and open the underlying evidence directly.",
      "I am seeking legal help because Amazon let an unauthorized person use my account and money, failed to stop the transaction despite my urgent contacts, made me pursue FedEx and American Express on my own, removed order records from my normal account view, and then ignored my efforts to get a real answer. After everything I did to give Amazon a chance to fix this, I want the company held responsible.",
    ],
    proof: "LegalEASE referral and Ms. Parlin's document request",
  },
];

const evidence = [
  {
    id: "01",
    title: "Amazon order-details screenshot",
    description: "This is the clearest single record of the unauthorized purchase. It shows order 112-9902087-6927424, the $578.79 total, American Express ending in 8003, the unauthorized Lynnwood shipping destination, and delivery on July 11.",
    href: "/evidence/amazon-order-details.png",
    label: "Open full-size image",
    image: "/evidence/amazon-order-details.png",
    sensitive: true,
  },
  {
    id: "02",
    title: "Complete material email correspondence",
    description: "This chronological record contains the non-duplicative Amazon order and security notices, my customer-service and leadership escalations, Amazon Executive Customer Relations' response, the American Express closure, and the attorney handoff.",
    href: "/evidence/email-correspondence-record.txt",
    label: "Read complete email record",
  },
  {
    id: "03",
    title: "American Express dispute-closure screenshot",
    description: "This preserves the notice I received after following Amazon's instruction to pursue the card issuer. It shows that my dispute was closed while the unauthorized Amazon charge remained unresolved.",
    href: "/evidence/amex-closure-screenshot.png",
    label: "Open full-size image",
    image: "/evidence/amex-closure-screenshot.png",
  },
  {
    id: "04",
    title: "American Express merchant document",
    description: "This original PDF attachment identifies Amazon Marketplace, the Internet entry method, and the disputed amount of $578.79. It contains no detailed explanation reconciling the outcome with Amazon's fraud determination.",
    href: "/evidence/amex-merchant-document-578-79.pdf",
    label: "Open original PDF",
  },
  {
    id: "05",
    title: "Evidence index and source notes",
    description: "This inventory explains where each exhibit came from, why it matters, and which Amazon notices document the removal of suspicious orders from the “Your Orders” section.",
    href: "/evidence/evidence-index.txt",
    label: "Open evidence index",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#top">Bala Manoghar · Amazon dispute</a>
        <nav aria-label="Page sections">
          <a href="#story">My story</a>
          <a href="#evidence">Evidence</a>
        </nav>
        <span className="private-note">Private · Prepared for Ms. Parlin</span>
      </header>

      <section className="story-section" id="story">
        <div className="story-hero">
          <p className="overline">1 · My story</p>
          <h1>Amazon let someone take <span>$578.79</span> from me. Then it left me to recover the money myself.</h1>
          <p className="direct-address">Ms. Parlin—this is what happened, in order, and why I am asking for your help.</p>
          <div className="case-facts" aria-label="Case facts">
            <div><strong>$578.79</strong><span>Money still at issue</span></div>
            <div><strong>112-9902087-6927424</strong><span>Unauthorized Amazon order</span></div>
            <div><strong>D-99641426</strong><span>Closed Amex dispute</span></div>
            <div><strong>408324</strong><span>LegalEASE case</span></div>
          </div>
        </div>

        <div className="opening-statement">
          <p>Amazon failed me at every stage.</p>
          <p>It allowed an unauthorized person into my account despite two-step verification, allowed that person to use my saved payment method and rewards, failed to stop the shipment after I urgently reported the fraud, and then pushed me toward FedEx and American Express to recover my own money. Amazon later confirmed the fraudulent-order flag—but did not refund me. It removed order records from my account view without asking me, and when American Express closed the dispute, Amazon ignored my direct questions and repeated leadership emails.</p>
        </div>

        <div className="timeline" aria-label="Chronological story">
          {story.map((item, index) => (
            <article className="story-step" key={`${item.date}-${item.title}`}>
              <div className="step-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="step-date">{item.date}</div>
              <div className="step-content">
                <h2>{item.title}</h2>
                {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {item.emphasis && <strong className="emphasis">{item.emphasis}</strong>}
                <p className="proof"><b>Documented by:</b> {item.proof}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="attorney-ask">
          <p className="overline">Why I am asking for legal help</p>
          <h2>I gave Amazon every opportunity to fix what it allowed to happen. It chose not to.</h2>
          <p>I want advice on holding Amazon responsible for the unauthorized loss, its failure to protect and assist me, the disappearance of the relevant orders from my account view, and its refusal to give a substantive answer after acknowledging the fraud. I also want the relevant Amazon records preserved before any more evidence becomes unavailable.</p>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="evidence-heading">
          <p className="overline">2 · Evidence</p>
          <h2>The documents behind my account</h2>
          <p>Each item opens directly. Together, these records show the unauthorized order, Amazon's account-protection findings, my repeated attempts to get help, Amazon's refusal to refund me, American Express's closure, and the unresolved questions Amazon has ignored.</p>
        </div>

        <div className="evidence-list">
          {evidence.map((item) => (
            <article className="evidence-item" key={item.id}>
              <div className="evidence-number">E-{item.id}</div>
              <div className="evidence-copy">
                <div className="evidence-title-line">
                  <h3>{item.title}</h3>
                  {item.sensitive && <span>Sensitive personal information</span>}
                </div>
                <p>{item.description}</p>
                <a href={item.href} target="_blank" rel="noreferrer">{item.label} <span aria-hidden="true">↗</span></a>
                {item.image && (
                  <a className="evidence-preview" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
                    <img src={item.image} alt={item.title} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <footer>
          <strong>Prepared by Bala Manoghar for Ms. Lindsey Parlin</strong>
          <span>Case #408324 · Record reviewed through August 15, 2026</span>
        </footer>
      </section>
    </main>
  );
}
