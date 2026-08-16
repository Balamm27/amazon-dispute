import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the professional attorney case brief", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Executive Summary/);
  assert.match(html, /Chronology/);
  assert.match(html, /Issues for Counsel/);
  assert.match(html, /Unknown scope of exposed addresses and payment information/);
  assert.match(html, /Amazon email correspondence/);
  assert.match(html, /Amazon did not proactively discover the fraud/);
  assert.match(html, /Unresolved account takeover, deficient post-notice response, and resulting damages/);
  assert.match(html, /Evidence preservation/);
  assert.match(html, /one direct financial consequence of a larger unresolved security incident/);
  assert.match(html, /both of my follow-up messages/);
  assert.doesNotMatch(html, /—/);
  assert.doesNotMatch(html, /earlier viewport captures|have been replaced|complete evidence rendering|panoramic rendering/i);
  assert.match(html, /\$578\.79/);
  assert.match(html, /Case 408324/);
  assert.match(html, /removed from the/);
  assert.match(html, /Prepared for Lindsey Parlin/);
  assert.equal((html.match(/<section/g) ?? []).length, 4);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("ships the core evidence files", async () => {
  await Promise.all([
    access(new URL("../public/evidence/amazon-order-details.png", import.meta.url)),
    access(new URL("../public/evidence/amex-closure-screenshot.png", import.meta.url)),
    access(new URL("../public/evidence/amex-merchant-document-578-79.pdf", import.meta.url)),
    access(new URL("../public/evidence/email-correspondence-record.txt", import.meta.url)),
    access(new URL("../public/evidence/email-snapshots/amazon-account-recovery-jul-11.png", import.meta.url)),
    access(new URL("../public/evidence/email-snapshots/amazon-account-needs-attention-jul-11.png", import.meta.url)),
    access(new URL("../public/evidence/email-snapshots/amazon-recent-changes-jul-12.png", import.meta.url)),
    access(new URL("../public/evidence/email-snapshots/amazon-executive-relations-jul-13.png", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview/", import.meta.url)));
});
