import { absoluteUrl } from "../lib/seo";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Little Tree",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/little-tree-icon.png"),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
