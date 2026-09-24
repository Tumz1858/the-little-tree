'use client';

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import LocalizedText from "../../components/LocalizedText";

const colorOptions = [
  { name: "White", src: "/images/model-06-white.jpg" },
  { name: "Black", src: "/images/model-06-black.jpg" },
  { name: "Blue", src: "/images/model-06-blue.jpg" },
  { name: "Green", src: "/images/model-06-green.jpg" },
];

const specifications = [
  { label: "Dimensions", value: "25 × 25 × 5 cm" },
  { label: "Weight", value: "0.3 kg / piece" },
  { label: "Load capacity", value: "300 kg" },
  { label: "Performance", value: "Weather resistant · UV resistant · Long-lasting outdoor use" },
];

const applications = [
  { thai: "มุมเล็ก / พื้นที่แคบ", english: "SMALL CORNERS", description: "Ideal for narrow zones and compact layouts where larger panels are less convenient." },
  { thai: "ต่อได้ 4 ด้าน", english: "4-SIDE CONNECTION", description: "Designed to connect from every side for more flexible arrangements." },
  { thai: "ใช้งานร่วมกับรุ่น 25 × 100 × 5", english: "WORKS WITH MODEL 25 × 100 × 5", description: "Pairs perfectly with the longer panel for more complete flooring layouts." },
  { thai: "จัดสวน", english: "GARDEN USE", description: "Suitable for decorative garden spaces and outdoor installations." },
  { thai: "ทางเดิน / พื้นที่เปียก", english: "WALKWAYS / WET AREAS", description: "Helps create cleaner, raised, and more practical surfaces." },
  { thai: "โรงเรือน / งานอเนกประสงค์", english: "GREENHOUSE / UTILITY USE", description: "Suitable for plant-care zones, greenhouse areas, and other everyday applications." },
];

export default function Model06Page() {
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
          <span>Model 06</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-20">
          <div>
            <div className="flex aspect-[1.12/1] items-center justify-center overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_20px_55px_rgba(54,82,64,0.08)] sm:p-14">
              <img src={selectedColor.src} alt={`Plastic Slat Compact Modular Tile in ${selectedColor.name}`} className="h-full w-full object-contain" />
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3" aria-label="Available colors">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  aria-label={`View ${color.name} color`}
                  aria-pressed={selectedColor.name === color.name}
                  className={`relative z-10 aspect-square cursor-pointer touch-manipulation pointer-events-auto overflow-hidden rounded-2xl border bg-white p-2 transition sm:p-3 ${selectedColor.name === color.name ? "border-[#476A55] ring-2 ring-[#476A55]/20" : "border-[#26352C]/10 hover:border-[#476A55]/50"}`}
                >
                  <img src={color.src} alt="" className="h-full w-full object-contain" />
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-[#758077]">Color: {selectedColor.name}</p>
          </div>

          <div className="lg:pt-4">
            <p className="text-xs uppercase tracking-[0.26em] text-[#64806C]">Flooring System / Model 06</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">Plastic Slat</h1>
            <p className="mt-3 text-xl font-medium leading-tight text-[#476A55]">Compact Modular Tile</p>
            <p className="mt-4 text-2xl font-medium leading-tight text-[#476A55]">แผ่นปูพื้นจัดสวน</p>
            <p className="mt-2 text-lg text-[#5C7462]">รุ่น 25 × 25 × 5 ซม.</p>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#68766C]">แผ่นปูพื้นจัดสวนขนาด 25 × 25 × 5 ซม. เป็นรุ่นขนาดกะทัดรัดที่ออกแบบมาเพื่อใช้งานในพื้นที่เล็ก มุมแคบ หรือจุดที่ต้องการความยืดหยุ่นในการจัดวาง สามารถต่อได้ทั้ง 4 ด้าน และใช้งานร่วมกับรุ่น 25 × 100 × 5 ซม. ได้อย่างลงตัว แข็งแรง ทนแดด ทนฝน ระบายน้ำได้ดี และเหมาะกับงานจัดสวน โรงเรือน ทางเดิน และพื้นที่อเนกประสงค์</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#8A948C]">A compact modular flooring tile designed for small spaces, corner areas, and flexible layouts. It connects on all 4 sides and works perfectly with the 25 × 100 × 5 cm model.</p>

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
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Made for flexible spaces</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Small tile.<br />More flexible layouts.</h2>
          </div>
          <div className="mt-10 grid gap-6 text-sm leading-7 text-[#68766C] sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <div key={application.english}>
                <h3 className="text-lg font-semibold text-[#304539]">{application.thai}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8A948C]">{application.english}</p>
                <p className="mt-2">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Product navigation" className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[#476A55] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <Link href="/flooring-system" className="transition hover:text-[#304539]">← Back to All 6 Models</Link>
        <Link href="/flooring-system/model-05" className="transition hover:text-[#304539]">Previous Model — Model 05</Link>
      </nav>
    </main>
  );
}