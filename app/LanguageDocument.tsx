"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

export default function LanguageDocument({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "th";
  }, [pathname]);

  return children;
}
