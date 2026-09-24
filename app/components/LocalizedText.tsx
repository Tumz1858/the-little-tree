"use client";

import { usePathname } from "next/navigation";

export default function LocalizedText({ th, en }: { th: string; en: string }) {
  const pathname = usePathname();
  return pathname === "/en" || pathname.startsWith("/en/") ? en : th;
}
