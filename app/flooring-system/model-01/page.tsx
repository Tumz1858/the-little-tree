'use client';

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import LocalizedText from "../../components/LocalizedText";

const colorOptions = [
  { name: "White", src: "/images/model-01-white.png" },
  { name: "Green", src: "/images/model-01-green.png" },
  { name: "Black", src: "/images/model-01-black.png" },
  { name: "Blue", src: "/images/model-01-blue.png" },
];

const specifications = [
  { label: "Dimensions", value: "30 × 100 × 3.4 cm" },
  { label: "Weight", value: "2.4 kg / piece" },
  { label: "Load capacity", value: "1000 kg" },
  { label: "Performance", value: "Weather resistant" },
];

export default function Model01Page() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  return (
    <main id="top" className="min-h-screen bg-[#F7F6F1] text-[#26352C]">
      <header className="border-b border-[#26352C]/10 bg-[#F7F6F1]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" aria-label="The Little Tree home" className="flex shrink-0 items-center gap-3">
            <img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" />
            <div className="flex flex-col justify-center leading-none">
              <div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div>
              <div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div>
            </div>
          </Link>
          <div className="flex min-w-0 flex-wrap items-center justify-end gap-3"><Link href="/flooring-system" className="text-right text-sm text-[#476A55] hover:underline"><LocalizedText th="กลับไปยัง Flooring System" en="Back to Flooring System" /> <span aria-hidden="true">→</span></Link><LanguageSwitcher /></div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#64806C]">
          <Link href="/flooring-system" className="hover:text-[#304539]">Flooring System</Link>
          <span aria-hidden="true">/</span>
          <span>Model 01</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-20">
          <div>
            <div className="flex aspect-[1.12/1] items-center justify-center overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_20px_55px_rgba(54,82,64,0.08)] sm:p-14">
              <img
                src={selectedColor.src}
                alt={`Plastic Slat Super Strong in ${selectedColor.name}`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3" aria-label="Available colors">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  aria-label={`View ${color.name} color`}
                  aria-pressed={selectedColor.name === color.name}
                  className={`relative z-10 aspect-square cursor-pointer touch-manipulation pointer-events-auto overflow-hidden rounded-2xl border bg-white p-2 transition sm:p-3 ${
                    selectedColor.name === color.name
                      ? "border-[#476A55] ring-2 ring-[#476A55]/20"
                      : "border-[#26352C]/10 hover:border-[#476A55]/50"
                  }`}
                >
                  <img src={color.src} alt="" className="h-full w-full object-contain" />
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-[#758077]">Color: {selectedColor.name}</p>
          </div>

          <div className="lg:pt-4">
            <p className="text-xs uppercase tracking-[0.26em] text-[#64806C]">Flooring System / Model 01</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Plastic Slat
              <span className="mt-2 block text-[#476A55]">[Super Strong]</span>
            </h1>
            <p className="mt-6 text-2xl font-medium leading-tight text-[#476A55]">แผ่นปูพื้นจัดสวน [แข็งแรงพิเศษ]</p>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#68766C]">
              แผ่นปูพื้นพลาสติกแบบแข็งแรงพิเศษ ออกแบบสำหรับพื้นที่ใช้งานหนัก<br />
              แข็งแรง ทนแดด ทนฝน ดูแลรักษาง่าย และเหมาะกับการใช้งานระยะยาว
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#8A948C]">
              Heavy-duty modular plastic flooring designed for demanding spaces and long-term everyday use.
            </p>

            <div className="mt-10 grid grid-cols-2 border-y border-[#26352C]/10">
              {specifications.map((specification) => (
                <div key={specification.label} className="border-b border-[#26352C]/10 py-5 odd:border-r odd:pr-5 even:pl-5 [&:nth-last-child(-n+2)]:border-b-0">
                  <p className="text-xs uppercase tracking-[0.13em] text-[#8A948C]">{specification.label}</p>
                  <p className="mt-2 text-base font-semibold text-[#304539]">{specification.value}</p>
                </div>
              ))}
            </div>

            <a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#304539]">
              <LocalizedText th="แชตผ่าน LINE" en="Chat via LINE" /> <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#26352C]/10 bg-[#EEF1EB]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Made for demanding spaces</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Strong under pressure.<br />Ready for real work.</h2>
          </div>
          <div className="grid gap-6 text-sm leading-7 text-[#68766C] sm:grid-cols-3">
            <div><h3 className="font-semibold text-[#304539]">ปูพื้นโรงงาน</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8A948C]">Factory Flooring</p><p className="mt-2">A dependable surface for production and work areas.</p></div>
            <div><h3 className="font-semibold text-[#304539]">ห้องเย็น</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8A948C]">Cold Rooms</p><p className="mt-2">Raised modular flooring for cleaner, drier spaces.</p></div>
            <div><h3 className="font-semibold text-[#304539]">ฟาร์มสัตว์เลี้ยง</h3><p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8A948C]">Pet Farms</p><p className="mt-2">Tough, weather-resistant support for daily use.</p></div>
          </div>
        </div>
      </section>

      <nav aria-label="Product navigation" className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#476A55] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <Link href="/flooring-system" className="transition hover:text-[#304539]">← Back to All 6 Models</Link>
        <Link href="/flooring-system/model-02" className="transition hover:text-[#304539]">Next Model — Model 02 →</Link>
      </nav>
    </main>
  );
}