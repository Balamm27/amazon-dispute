# Amazon dispute case file

An evidence dashboard for Case #408324 concerning an Amazon account takeover,
unauthorized order 112-9902087-6927424, and the unresolved $578.79 charge.

The site includes:

- a source-based incident timeline;
- Amazon's written account-protection and refund positions;
- the documented removal of suspicious orders from the customer's order page;
- the American Express dispute record;
- an exhibit library for counsel review; and
- the remaining factual questions requiring investigation.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
npm run build
```

Evidence files intended for the dashboard are stored in `public/evidence/`.
Some exhibits contain personal information and should not be made public without
an explicit review of the site's sharing settings.
