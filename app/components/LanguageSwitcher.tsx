"use client";

import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  pathname?: string;
  language?: "th" | "en";
};

function englishPath(pathname: string) {
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

function thaiPath(pathname: string) {
  const path = pathname.replace(/^\/en(?=\/|$)/, "");
  return path || "/";
}

export default function LanguageSwitcher({ pathname: suppliedPathname, language: suppliedLanguage }: LanguageSwitcherProps) {
  const currentPathname = usePathname();
  const pathname = suppliedPathname ?? currentPathname;
  const language = suppliedLanguage ?? (pathname === "/en" || pathname.startsWith("/en/") ? "en" : "th");
  const thai = thaiPath(pathname);
  const english = englishPath(thai);

  return (
    <div className="flex items-center gap-2 text-xs tracking-[0.16em]" aria-label="Language selector">
      <a href={thai} aria-current={language === "th" ? "page" : undefined} className={language === "th" ? "font-semibold text-[#26352C]" : "text-[#8A948C] hover:text-[#26352C]"}>TH</a>
      <span aria-hidden="true" className="text-[#B6C0B8]">|</span>
      <a href={english} aria-current={language === "en" ? "page" : undefined} className={language === "en" ? "font-semibold text-[#26352C]" : "text-[#8A948C] hover:text-[#26352C]"}>EN</a>
    </div>
  );
}
