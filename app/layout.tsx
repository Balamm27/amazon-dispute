import type { Metadata } from "next";
import { Literata, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Unresolved Amazon Account Security Incident | Case 408324",
    description:
      "Attorney case brief concerning Amazon's unanswered account-security incident, unknown data exposure, and unresolved $578.79 loss.",
    openGraph: {
      title: "Unresolved Amazon Account Security Incident | Case 408324",
      description: "Amazon's unanswered account-security incident, unknown data exposure, financial loss, and supporting evidence.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Amazon account-takeover dispute case file" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Unresolved Amazon Account Security Incident | Case 408324",
      description: "Amazon's unanswered account-security incident, unknown data exposure, financial loss, and supporting evidence.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${literata.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
