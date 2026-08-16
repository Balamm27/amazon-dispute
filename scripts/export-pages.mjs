import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "pages-dist");
const basePath = "/amazon-dispute/";
const publicOrigin = "https://balamm27.github.io";

await rm(output, { force: true, recursive: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('href="/', `href="${basePath}`)
  .replaceAll('src="/', `src="${basePath}`)
  .replaceAll('content="http://localhost:3000/', `content="${publicOrigin}${basePath}`)
  .replaceAll("url(/", `url(${basePath}`)
  .replace(/<link rel="modulepreload"[^>]*>\s*/g, "")
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");

await writeFile(resolve(output, "index.html"), html);
await writeFile(resolve(output, ".nojekyll"), "");

const manifest = JSON.parse(await readFile(resolve(output, ".vite/manifest.json"), "utf8"));
for (const entry of Object.values(manifest)) {
  for (const cssFile of entry.css ?? []) {
    const cssPath = resolve(output, cssFile);
    const css = await readFile(cssPath, "utf8");
    await writeFile(cssPath, css.replaceAll("url(/", `url(${basePath}`));
  }
}
