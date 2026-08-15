from pathlib import Path
import textwrap

from PIL import Image, ImageDraw, ImageFont


OUT = Path(__file__).resolve().parents[1] / "public" / "evidence" / "email-snapshots"
OUT.mkdir(parents=True, exist_ok=True)

WIDTH = 1800
MARGIN = 118
CONTENT_WIDTH = WIDTH - MARGIN * 2
NAVY = "#172235"
BLUE = "#274b73"
TEXT = "#202936"
MUTED = "#657184"
LINE = "#cfd5dc"
WASH = "#f4f6f8"
AMAZON_BG = "#fffaf0"
CUSTOMER_BG = "#f4f8fc"

FONT_REGULAR_PATH = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD_PATH = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

TITLE = ImageFont.truetype(FONT_BOLD_PATH, 46)
SUBTITLE = ImageFont.truetype(FONT_REGULAR_PATH, 24)
LABEL = ImageFont.truetype(FONT_BOLD_PATH, 21)
HEADER = ImageFont.truetype(FONT_BOLD_PATH, 28)
BODY = ImageFont.truetype(FONT_REGULAR_PATH, 28)
BODY_BOLD = ImageFont.truetype(FONT_BOLD_PATH, 28)
FOOTER = ImageFont.truetype(FONT_REGULAR_PATH, 20)


def clean(text: str) -> str:
    return "\n".join(line.rstrip() for line in text.strip().replace("\r", "").split("\n"))


def wrap_line(text: str, width: int = 94) -> list[str]:
    if not text:
        return [""]
    indent = len(text) - len(text.lstrip(" "))
    prefix = text[:indent]
    stripped = text[indent:]
    subsequent = prefix
    if stripped.startswith(("-- ", "- ")):
        marker = "-- " if stripped.startswith("-- ") else "- "
        prefix += marker
        stripped = stripped[len(marker):]
        subsequent = " " * len(prefix)
    return textwrap.wrap(
        stripped,
        width=max(24, width - len(prefix)),
        initial_indent=prefix,
        subsequent_indent=subsequent,
        break_long_words=False,
        break_on_hyphens=False,
        replace_whitespace=False,
    ) or [prefix]


def body_lines(text: str) -> list[str]:
    result: list[str] = []
    for raw in clean(text).split("\n"):
        result.extend(wrap_line(raw))
    return result


def message_height(message: dict) -> int:
    header_rows = 5 + (1 if message.get("to") else 0)
    return 62 + header_rows * 38 + 32 + len(body_lines(message["body"])) * 43 + 62


def draw_labeled(draw: ImageDraw.ImageDraw, y: int, label: str, value: str) -> int:
    draw.text((MARGIN + 42, y), label.upper(), font=LABEL, fill=MUTED)
    value_x = MARGIN + 235
    value_lines = textwrap.wrap(value, width=86, break_long_words=False, break_on_hyphens=False) or [""]
    for idx, line in enumerate(value_lines):
        draw.text((value_x, y + idx * 34), line, font=SUBTITLE, fill=TEXT)
    return y + max(38, len(value_lines) * 34)


def render(filename: str, title: str, messages: list[dict]) -> None:
    top = 250
    gap = 42
    footer_space = 175
    total_height = top + sum(message_height(m) + gap for m in messages) + footer_space
    image = Image.new("RGB", (WIDTH, total_height), "white")
    draw = ImageDraw.Draw(image)

    draw.rectangle((0, 0, WIDTH, 18), fill=NAVY)
    draw.text((MARGIN, 70), "EMAIL EVIDENCE RENDERING", font=LABEL, fill=BLUE)
    draw.text((MARGIN, 112), title, font=TITLE, fill=NAVY)
    draw.text(
        (MARGIN, 176),
        "Source: connected Gmail mailbox · Rendered August 15, 2026 · Full message headers and body text",
        font=SUBTITLE,
        fill=MUTED,
    )
    draw.line((MARGIN, 225, WIDTH - MARGIN, 225), fill=LINE, width=2)

    y = top
    for number, message in enumerate(messages, 1):
        height = message_height(message)
        box_bottom = y + height
        background = AMAZON_BG if message["side"] == "amazon" else CUSTOMER_BG
        draw.rounded_rectangle((MARGIN, y, WIDTH - MARGIN, box_bottom), radius=16, fill=background, outline=LINE, width=2)
        badge = "AMAZON" if message["side"] == "amazon" else "CUSTOMER"
        badge_color = "#8a5a00" if message["side"] == "amazon" else BLUE
        draw.text((MARGIN + 42, y + 28), f"MESSAGE {number} · {badge}", font=LABEL, fill=badge_color)
        header_y = y + 78
        header_y = draw_labeled(draw, header_y, "Date", message["date"])
        header_y = draw_labeled(draw, header_y, "From", message["from"])
        if message.get("to"):
            header_y = draw_labeled(draw, header_y, "To", message["to"])
        header_y = draw_labeled(draw, header_y, "Subject", message["subject"])
        header_y = draw_labeled(draw, header_y, "Message-ID", message["message_id"])
        draw.line((MARGIN + 42, header_y + 10, WIDTH - MARGIN - 42, header_y + 10), fill=LINE, width=2)

        body_y = header_y + 38
        for line in body_lines(message["body"]):
            font = BODY_BOLD if line in {"Please confirm immediately:", "Hello Bala,", "Hello Christian,"} else BODY
            draw.text((MARGIN + 42, body_y), line, font=font, fill=TEXT)
            body_y += 43
        y = box_bottom + gap

    draw.line((MARGIN, total_height - 105, WIDTH - MARGIN, total_height - 105), fill=LINE, width=2)
    footer_text = (
        "Evidence note: This image is a faithful visual rendering of message headers and body text read from the "
        "source Gmail messages. Preserve the original Gmail messages for native metadata and authentication."
    )
    for idx, line in enumerate(textwrap.wrap(footer_text, width=145)):
        draw.text((MARGIN, total_height - 92 + idx * 27), line, font=FOOTER, fill=MUTED)
    image.save(OUT / filename, "PNG", optimize=True)


recovery_body = """
Hello,

We believe that an unauthorized party may have accessed your Amazon account. As a security measure, we have taken the following actions:

-- Canceled any suspicious pending orders and removed them from "Your Orders" section in "Your Account."
-- If you were using a password for your Amazon account, it has been disabled and you need to reset your password.
-- Reversed any changes made by this unauthorized party.
-- Removed suspicious devices from your account.
-- Existing security features, such as Passkey or Two-Step Verification, might have been affected during this process because we couldn't verify if recent changes were made by you. After regaining access, visit the "Login & security" page in your "Account settings" to verify if these features are still enabled and add them back if needed.

How to report unauthorized charges?

If you notice unauthorized charges on your card, please contact your bank to report them. Your bank can guide you through the process to dispute these transactions. Please note that refund decisions are made at your bank's discretion.

During your next sign-in, we'll ask you to verify recent orders on your account. Your feedback during this process is valuable as it helps us keep account security and ensures we're making the right decisions to protect our customers. While these orders will remain canceled even after verification, you can easily place new orders once your account is secured.

How to strengthen account security?

-- If you haven't already, enroll in Passkey to sign in the same way you unlock your device, by using face, fingerprint, or PIN. To enroll in Passkey, go to "Login & Security" in "Account settings."
-- Monitor regularly for unauthorized changes to email settings, especially auto-forwarding rules and deletion options.
-- To learn more, visit "Security and Privacy" under the Amazon Help pages.

Can I contact Customer Service to recover my account?

The fastest way to regain access is by following the on-screen instructions at sign-in. If you encounter difficulties, our Customer Service team is available to provide alternative recovery support.

Thank you for your patience while we worked to keep your account secure.

Amazon Account Protection Services
"""

attention_body = """
Hello,

Thank you for contacting us about your account. We want to confirm that we have already taken action to protect your account from the unauthorized activity we detected. We understand your concern about this situation and want to reassure you about the security measures in place.

We have taken the following actions to protect your account:

-- Canceled any suspicious pending orders and removed them from "Your Orders" section in "Your Account."
-- If you were using a password for Amazon services, then it has been disabled and you will be required to create a new one.
-- Removed suspicious devices from your account.
-- Existing security features, such as Passkey or Two-Step Verification, might have been affected during this process because we couldn't verify if recent changes were made by you. After regaining access, visit the "Login & security" page in your "Account settings" to verify if these features are still enabled and add them back if needed.

How to report unauthorized charges?

If you notice unauthorized charges on your card, please contact your bank to report them. Your bank can guide you through the process to dispute these transactions. Please note that refund decisions are made at your bank's discretion.

How to strengthen account security?

-- If you haven't already, enroll in Passkey to sign in the same way you unlock your device, by using face, fingerprint, or PIN.
-- Create strong, unique passwords for all online accounts including Amazon. Monitor regularly for unauthorized changes to email settings, especially auto-forwarding rules and deletion options.
-- To learn more, visit "Security and Privacy" under Amazon Help pages.

Can I contact Customer Service to recover my account?

The fastest way to regain access is by following the on-screen instructions at sign-in. If you encounter difficulties, our Customer Service team is available to provide alternative recovery support.

Thank you for your patience while we work to keep your account secure.

Amazon Account Protection Services
"""

changes_body = """
Hello,

Thank you for reaching out to Amazon.

We recommend you to review all the recent activity on your credit or debit card and report any unauthorized charges to your bank within 90 days of from the date of the unauthorized transaction on your account.

Once you have reported the unauthorized charges, the bank will send you forms to formally dispute them, credit your account, and file a chargeback to the applicable merchants.

Your bank or financial institution are responsible for refunding any unauthorized charges to your credit or debit card.

Account Specialist
Amazon.com
"""

christian_body = """
Hello Bala,

This is Christian with Amazon.com’s Executive Customer Relations. Your situation has been brought to my attention, and I look forward to assisting you further.

I'm sorry to hear about the unauthorized activity that occurred using your Amazon account. As an Amazon customer myself, I can understand how frustrating and concerning it would be to experience unauthorized activity on my Amazon account.

When you experience unauthorized activity from your personal Amazon account, we first recommend contacting us so the activity can be reported and the order can be flagged as fraudulent. This part of the process is complete.

The second part of the process occurs on your end with your bank. Please dispute the fraudulent transaction directly with your bank to receive your refund. Amazon will not be issuing a refund for the fraudulent order unless a dispute is submitted through your bank.

Our Account Specialists sent an email on July 9th at 1:29 pm your local time with the instruction to dispute any unauthorized charges with your bank.

I hope this information has been helpful, and we look forward to seeing you again soon.

Best regards,
Christian
Amazon.com
"""

customer_reply_one = """
Hello Christian,

Thank you for responding. However, directing me to my bank addresses only the disputed charge. It does not address Amazon’s accountability for an account takeover that occurred despite 2FA.

An unauthorized party accessed my Amazon account, added an unknown address, placed multiple orders, and used a payment method saved with Amazon. I then spent hours contacting Customer Service, experienced disconnected calls, and received promised callbacks that never occurred.

The July 9 email was not a proactive response. It was sent only after I repeatedly contacted Amazon and struggled to get Customer Service to recognize and escalate the seriousness of the incident.

Simply transferring the financial burden and investigation to my bank does not explain what occurred or what Amazon has done about it.

I understand that Amazon may not disclose confidential security systems or detailed internal logs. I am not asking for proprietary information. I am asking for the information any customer would reasonably need before trusting Amazon with saved payment methods again:

- Was my actual card information exposed, or could the saved payment method only be used within Amazon?
- Has every unauthorized session, device, address, and account change been removed?
- Has Amazon confirmed that my account is now secure?
- What customer facing protections prevent this from happening again?
- What responsibility does Amazon accept when its platform allows a saved payment method to be stolen or used after an account takeover?

I understand that a bank dispute may be part of the financial recovery process. However, it cannot substitute for Amazon investigating and accepting responsibility for unauthorized activity conducted through its platform.

I am now forced to monitor multiple financial accounts because Amazon has not confirmed the scope of the compromise. If Amazon’s position is that customers assume this risk when saving payment methods, please state that clearly in writing. Otherwise, please explain what protection Amazon provides and what failed in this case.

Please do not close this matter with another generic instruction to contact my bank. I am requesting the investigation findings that Amazon can disclose, confirmation that the account is secure, and a meaningful response regarding Amazon’s handling of this incident.

Please also preserve all relevant authentication logs, device and session records, 2FA events, account changes, order and payment records, support tickets, chats, and call recordings.

Until Amazon provides these basic assurances, I have no reasonable basis to trust Amazon with saved payment methods in the future.

Regards,
Bala
"""

customer_reply_two = """
Hello Christian,

I followed Amazon’s instruction and disputed the unauthorized $578.79 transaction with American Express.

American Express has now denied the dispute, rebilled the amount, and determined that I am responsible for the charge. I have attached their response.

This leaves me in an unacceptable position. Amazon instructed me to seek reimbursement from my bank, while my bank has rejected the dispute based on documentation gathered during its investigation. I am now being held responsible for an order that Amazon has already flagged as fraudulent and that was shipped to an address I have never used or authorized.

Please confirm immediately:

1. Whether Amazon or its payment processor provided documentation contesting my dispute
2. Whether Amazon clearly informed American Express that the order was fraudulent and unauthorized
3. Whether Amazon will correct any information that caused the dispute to be denied
4. How Amazon will now refund the $578.79 that I have been rebilled

If Amazon’s position is that the bank must issue the refund, Amazon must cooperate with the bank and confirm that this was an unauthorized transaction. Amazon cannot flag the order as fraudulent, refuse to issue a refund, and simultaneously leave me liable when the bank rejects the dispute.

Please escalate this immediately to the appropriate payments and security teams. I need written confirmation of the action Amazon will take and a clear resolution, not another instruction to return to my bank.

I am also requesting that Amazon preserve all records relating to the order, fraud designation, payment dispute, account access, delivery address, and any documentation provided to American Express.

Regards,
Bala
Order 112-9902087-6927424
Transaction amount: $578.79
Transaction date: July 10, 2026
"""

render(
    "amazon-account-recovery-jul-11.png",
    "Amazon Account Recovery Notice",
    [{
        "side": "amazon",
        "date": "Sat, 11 Jul 2026 16:21:08 +0000",
        "from": "Amazon Account Protection Services <no-reply@amazon.com>",
        "to": "bala.manoghar@gmail.com",
        "subject": "Account Recovery: Sign-in and verify your order.",
        "message_id": "<0100019f51fb8f2c-e7e2b767-a349-47c4-af1f-b8fda25a607f-000000@email.amazonses.com>",
        "body": recovery_body,
    }],
)

render(
    "amazon-account-needs-attention-jul-11.png",
    "Amazon Account Protection Follow-up",
    [{
        "side": "amazon",
        "date": "Sat, 11 Jul 2026 20:29:33 +0000",
        "from": "Amazon Account Protection Services <no-reply@amazon.com>",
        "to": "bala.manoghar@gmail.com",
        "subject": "Your Amazon account needs attention",
        "message_id": "<0100019f52deff49-5a7edd07-5c45-4e2e-9b60-f05d04069f36-000000@email.amazonses.com>",
        "body": attention_body,
    }],
)

render(
    "amazon-recent-changes-jul-12.png",
    "Amazon Bank-dispute Instruction",
    [{
        "side": "amazon",
        "date": "Sun, 12 Jul 2026 05:49:36 +0000",
        "from": "Amazon Account Protection Services <no-reply@amazon.com>",
        "to": "bala.manoghar@gmail.com",
        "subject": "Recent changes to your Amazon.com account",
        "message_id": "<0100019f54dfbb41-312262d4-94d3-4287-80cb-c1693ca8cf1f-000000@email.amazonses.com>",
        "body": changes_body,
    }],
)

render(
    "amazon-executive-relations-jul-13.png",
    "Amazon Executive Customer Relations Thread",
    [
        {
            "side": "amazon",
            "date": "Mon, 13 Jul 2026 13:46:47 +0000",
            "from": "cs-reply@amazon.com <cs-reply@amazon.com>",
            "to": "bala.manoghar@gmail.com",
            "subject": "A Message from Christian with Amazon.com's Executive Customer Relations",
            "message_id": "<0100019f5bbaf6f1-70c1f683-6567-49bf-aaec-65f7e3871f1c-000000@email.amazonses.com>",
            "body": christian_body,
        },
        {
            "side": "customer",
            "date": "Tue, 14 Jul 2026 05:55:14 -0700",
            "from": "BALASUBRAMANIAN M M <bala.manoghar@gmail.com>",
            "to": "cs-reply@amazon.com; ajassy@amazon.com; dherring@amazon.com; desantis@amazon.com; steve@amazon.com",
            "subject": "Re: A Message from Christian with Amazon.com's Executive Customer Relations",
            "message_id": "<CAGLBC6_TrL3JUMHo6V09iyyLH9rrRyHyc=3phODv7pnBa=jfrw@mail.gmail.com>",
            "body": customer_reply_one,
        },
        {
            "side": "customer",
            "date": "Tue, 14 Jul 2026 15:24:50 -0700",
            "from": "BALASUBRAMANIAN M M <bala.manoghar@gmail.com>",
            "to": "cs-reply@amazon.com; ajassy@amazon.com; dherring@amazon.com; desantis@amazon.com; steve@amazon.com",
            "subject": "Re: A Message from Christian with Amazon.com's Executive Customer Relations",
            "message_id": "<CAGLBC68cdhqOf7dFFE4MZgza+ySWr=PE8-wSj=sVhChd-wYm9g@mail.gmail.com>",
            "body": customer_reply_two,
        },
    ],
)
