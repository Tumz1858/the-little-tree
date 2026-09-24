import type { Metadata } from "next";

export type SiteLanguage = "th" | "en";
export type SeoPage = "home" | "flooring" | "bench" | "rack" | "greenhouse" | `model-0${1 | 2 | 3 | 4 | 5 | 6}`;

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")).replace(/\/$/, "");

const pageContent: Record<SeoPage, Record<SiteLanguage, { title: string; description: string }>> = {
  home: {
    th: {
      title: "The Little Tree | ระบบสวน โรงเรือน ฟาร์ม และพื้นที่ปลูก",
      description: "The Little Tree ออกแบบและผลิตโซลูชันสำหรับสวน โรงเรือน ฟาร์มแคคตัส และพื้นที่เพาะปลูก ทั้งแผ่นปูพื้น โต๊ะปลูก ชั้นวางต้นไม้ และโรงเรือนโมดูลาร์ ผลิตในประเทศไทย",
    },
    en: {
      title: "The Little Tree | Garden & Farm Solutions",
      description: "The Little Tree designs and manufactures practical garden, greenhouse and farm solutions including modular flooring, growing benches, plant racks and modular greenhouse systems in Thailand.",
    },
  },
  flooring: {
    th: { title: "Flooring System | แผ่นปูพื้นสวน โรงเรือน และฟาร์ม | The Little Tree", description: "แผ่นปูพื้นพลาสติกสำหรับสวน โรงเรือน ฟาร์ม ทางเดิน พื้นที่เปียก และพื้นที่ปลูก มี 6 รุ่นให้เลือกตามการใช้งาน" },
    en: { title: "Flooring System | Modular Garden and Farm Flooring | The Little Tree", description: "Explore six modular flooring models for gardens, greenhouses, farms, walkways, wet areas and practical growing spaces." },
  },
  bench: {
    th: { title: "Growing Bench System | โต๊ะปลูกต้นไม้สำหรับโรงเรือน | The Little Tree", description: "โต๊ะปลูกต้นไม้โครงเหล็กสำหรับโรงเรือน ฟาร์มแคคตัส และพื้นที่เพาะปลูก ออกแบบให้จัดวางและดูแลต้นไม้ได้ง่าย" },
    en: { title: "Growing Bench System | Modular Greenhouse Growing Benches | The Little Tree", description: "Modular steel growing benches for greenhouses, cactus farms, nurseries and organized plant-growing spaces." },
  },
  rack: {
    th: { title: "Plant Rack System | ชั้นวางต้นไม้และกระถาง | The Little Tree", description: "ชั้นวางต้นไม้โครงเหล็กสำหรับเพิ่มพื้นที่จัดวางในแนวตั้ง เหมาะกับโรงเรือน ฟาร์ม ร้านต้นไม้ และบ้านสวน" },
    en: { title: "Plant Rack System | Steel Plant Racks in Multiple Sizes | The Little Tree", description: "Steel plant racks for vertical growing space, nurseries, greenhouses, plant shops and home gardens." },
  },
  greenhouse: {
    th: { title: "Modular Greenhouse System | โรงเรือนโมดูลาร์ | The Little Tree", description: "โรงเรือนสำเร็จรูปโครงเหล็กแบบโมดูลาร์ ออกแบบและปรับขนาดตามพื้นที่จริง เหมาะกับฟาร์มแคคตัส โรงเพาะ และพื้นที่ปลูก" },
    en: { title: "Modular Greenhouse System | Custom Greenhouse Structures | The Little Tree", description: "Modular steel greenhouse structures designed around real spaces for cactus farms, nurseries, growing areas and modern agriculture." },
  },
  "model-01": {
    th: { title: "Flooring System Model 01 | แผ่นปูพื้น Heavy Duty | The Little Tree", description: "แผ่นปูพื้นพลาสติก Model 01 ขนาด 30 × 100 × 3.4 cm สำหรับพื้นที่ใช้งานหนัก โรงงาน ฟาร์ม โรงเรือน และทางเดิน" },
    en: { title: "Flooring System Model 01 | Heavy-Duty Plastic Slat | The Little Tree", description: "A heavy-duty 30 × 100 × 3.4 cm modular plastic flooring slat for demanding garden, farm, greenhouse and walkway applications." },
  },
  "model-02": {
    th: { title: "Flooring System Model 02 | แผ่นปูพื้นรุ่นขายดี | The Little Tree", description: "แผ่นปูพื้นพลาสติก Model 02 ขนาด 30 × 100 × 5 cm รุ่นขายดีสำหรับสวน โรงเรือน ฟาร์ม และพื้นที่ใช้งานอเนกประสงค์" },
    en: { title: "Flooring System Model 02 | Best-Selling Plastic Slat | The Little Tree", description: "A versatile 30 × 100 × 5 cm modular plastic flooring model for gardens, greenhouses, farms and everyday outdoor use." },
  },
  "model-03": {
    th: { title: "Flooring System Model 03 | แผ่นปูพื้นขนาดกะทัดรัด | The Little Tree", description: "แผ่นปูพื้นพลาสติก Model 03 ขนาด 30 × 50 × 5 cm สำหรับพื้นที่เล็ก มุมแคบ การจัดสวน และการต่อขยายร่วมกับ Model 02" },
    en: { title: "Flooring System Model 03 | Compact Plastic Slat | The Little Tree", description: "A compact 30 × 50 × 5 cm modular flooring model for small areas, narrow walkways, gardens and flexible layouts." },
  },
  "model-04": {
    th: { title: "Flooring System Model 04 | แผ่นปูพื้นสำหรับสวนและโรงเรือน | The Little Tree", description: "แผ่นปูพื้นพลาสติก Model 04 ขนาด 30 × 100 × 3.4 cm สำหรับสวน โรงเรือน ฟาร์ม ทางเดิน และพื้นที่เปียก" },
    en: { title: "Flooring System Model 04 | Versatile Modular Flooring | The Little Tree", description: "A 30 × 100 × 3.4 cm modular flooring model for gardens, greenhouses, farms, walkways, wet areas and utility spaces." },
  },
  "model-05": {
    th: { title: "Flooring System Model 05 | แผ่นปูพื้นสำหรับพื้นที่แคบ | The Little Tree", description: "แผ่นปูพื้นพลาสติก Model 05 ขนาด 25 × 100 × 5 cm สำหรับพื้นที่แคบ ทางเดิน โรงเรือน งานจัดสวน และพื้นที่เพาะปลูก" },
    en: { title: "Flooring System Model 05 | Narrow Modular Flooring Panel | The Little Tree", description: "A 25 × 100 × 5 cm modular flooring panel designed for narrow spaces, walkways, greenhouses and plant-care areas." },
  },
  "model-06": {
    th: { title: "Flooring System Model 06 | แผ่นปูพื้นโมดูลาร์ขนาดเล็ก | The Little Tree", description: "แผ่นปูพื้นพลาสติก Model 06 ขนาด 25 × 25 × 5 cm ต่อได้ 4 ด้าน เหมาะกับมุมเล็ก ทางเดิน โรงเรือน และงานจัดสวน" },
    en: { title: "Flooring System Model 06 | Compact Modular Tile | The Little Tree", description: "A compact 25 × 25 × 5 cm modular flooring tile with four-side connection for small corners, gardens, greenhouses and walkways." },
  },
};

export const pagePaths: Record<SeoPage, string> = {
  home: "/",
  flooring: "/flooring-system",
  bench: "/growing-bench-system",
  rack: "/plant-rack-system",
  greenhouse: "/modular-greenhouse-system",
  "model-01": "/flooring-system/model-01",
  "model-02": "/flooring-system/model-02",
  "model-03": "/flooring-system/model-03",
  "model-04": "/flooring-system/model-04",
  "model-05": "/flooring-system/model-05",
  "model-06": "/flooring-system/model-06",
};

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function metadataFor(page: SeoPage, language: SiteLanguage): Metadata {
  const content = pageContent[page][language];
  const thaiPath = pagePaths[page];
  const path = language === "en" ? `/en${thaiPath === "/" ? "" : thaiPath}` : thaiPath;
  const canonical = absoluteUrl(path);

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical,
      languages: {
        th: absoluteUrl(thaiPath),
        en: absoluteUrl(`/en${thaiPath === "/" ? "" : thaiPath}`),
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      siteName: "The Little Tree",
      locale: language === "th" ? "th_TH" : "en_US",
      type: "website",
      images: [{ url: absoluteUrl("/images/hero-greenhouse.jpg"), alt: "The Little Tree growing space solutions" }],
    },
  };
}

export const siteUrlForRobots = siteUrl;
