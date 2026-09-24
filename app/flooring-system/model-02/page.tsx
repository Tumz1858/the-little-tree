'use client';

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import LocalizedText from "../../components/LocalizedText";

const colorOptions = [
  { name: "White", src: "/images/model-02-white.png" },
  { name: "Blue", src: "/images/model-02-blue.png" },
  { name: "Green", src: "/images/model-02-green.png" },
  { name: "Black", src: "/images/model-02-black.png" },
];

const specifications = [
  { label: "Dimensions", value: "30 × 100 × 5 cm" },
  { label: "Weight", value: "1.8 kg / piece" },
  { label: "Load capacity", value: "500 kg" },
  { label: "Performance", value: "Weather resistant" },
];

const applications = [
  { thai: "ฟาร์มแคคตัส", english: "CACTUS FARMS", description: "Ideal for clean and elevated cactus growing areas." },
  { thai: "ปูรองกระถาง", english: "UNDER POTS", description: "Helps keep pots organized, lifted, and away from wet ground." },
  { thai: "ปูจัดสวน", english: "LANDSCAPING", description: "Suitable for neat and practical garden flooring layouts." },
  { thai: "ปูรองหญ้าเทียม", english: "UNDER ARTIFICIAL GRASS", description: "Supports airflow and surface leveling beneath artificial grass." },
  { thai: "ปูทางเดิน", english: "WALKWAYS", description: "Creates clean, durable, and weather-resistant walkway surfaces." },
  { thai: "ปูรองกรงสัตว์เลี้ยง", english: "PET CAGE FLOORING", description: "Helps create a dry, raised, and easy-to-clean flooring surface." },
];

export default function Model02Page() {
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
          <span>Model 02</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-20">
          <div>
            <div className="flex aspect-[1.12/1] items-center justify-center overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_20px_55px_rgba(54,82,64,0.08)] sm:p-14">
              <img src={selectedColor.src} alt={`Plastic Slat Best Seller in ${selectedColor.name}`} className="h-full w-full object-contain" />
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
            <p className="text-xs uppercase tracking-[0.26em] text-[#64806C]">Flooring System / Model 02</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Plastic Slat
              <span className="mt-2 block text-[#476A55]">[Best Seller]</span>
            </h1>
            <p className="mt-6 text-2xl font-medium leading-tight text-[#476A55]">แผ่นปูพื้นจัดสวน [รุ่นขายดี]</p>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#68766C]">แผ่นปูพื้นจัดสวนรุ่นขายดี ออกแบบสำหรับการใช้งานอเนกประสงค์ แข็งแรง ทนแดด ทนฝน ดูแลรักษาง่าย และเหมาะกับการใช้งานระยะยาว</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#8A948C]">Best-selling modular plastic flooring designed for versatile everyday use. Durable, weather resistant, easy to maintain, and suitable for long-term indoor and outdoor applications.</p>

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
            <p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Made for versatile spaces</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">One modular floor.<br />Many everyday uses.</h2>
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
        <Link href="/flooring-system/model-03" className="transition hover:text-[#304539]">Next Model — Model 03 →</Link>
      </nav>
    </main>
  );
}