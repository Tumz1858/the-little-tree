import type { Metadata } from "next";
import { metadataFor } from "../../lib/seo";

export const metadata: Metadata = metadataFor("model-03", "th");
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
