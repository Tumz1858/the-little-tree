import type { Metadata } from "next";
import type { ReactNode } from "react";
import { metadataFor } from "../lib/seo";

export const metadata: Metadata = metadataFor("home", "en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return children;
}
