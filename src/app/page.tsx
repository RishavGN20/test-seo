// app/page.tsx
import type { Metadata } from "next";
import { pagesMetadata } from "@/lib/seo/pagesMetaData";

const config = pagesMetadata.homePage;

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.canonical,
  },
  twitter: {
    title: config.title,
    description: config.description,
  },
};

export default function HomePage() {
  return (
    <main>
      <h1>Hello from GrowthNatives</h1>
    </main>
  );
}