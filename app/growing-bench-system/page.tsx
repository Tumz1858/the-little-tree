import LanguageSwitcher from "../components/LanguageSwitcher";
import LocalizedText from "../components/LocalizedText";
import { metadataFor } from "../lib/seo";

export const metadata = metadataFor("bench", "th");

const benefits = [
  { title: "Modular", thai: "ต่อขยายได้ตามพื้นที่", icon: "modules" },
  { title: "Extendable", thai: "ต่อความยาวได้หลายโมดูล", icon: "extend" },
  { title: "Matte White Steel", thai: "เหล็กพ่นสีฝุ่นขาวด้าน", icon: "steel" },
  { title: "Easy to Clean", thai: "ดูแลและทำความสะอาดง่าย", icon: "clean" },
  { title: "Greenhouse Ready", thai: "เหมาะกับโรงเรือนและฟาร์ม", icon: "leaf" },
];

const applications = [
  { title: "Cactus Farm", thai: "ฟาร์มแคคตัส", image: "/images/cactus-farm.jpg", requestedImage: "/images/bench-cactus-farm.jpg" },
  { title: "Greenhouse", thai: "โรงเรือน", image: "/images/greenhouse-solution.jpg", requestedImage: "/images/bench-greenhouse.jpg" },
  { title: "Nursery", thai: "พื้นที่เพาะชำ", image: "/images/greenhouse1.jpg", requestedImage: "/images/bench-nursery.jpg" },
  { title: "Plant Display", thai: "พื้นที่จัดวางต้นไม้", image: "/images/featured-cactus-bench-system.jpg", requestedImage: "/images/bench-plant-display.jpg" },
];

const structureDetails = [
  { title: "Powder-Coated Steel", thai: "โครงเหล็กกล่องพ่นสีฝุ่นขาวด้าน", image: "/images/system-bench.jpg", requestedImage: "/images/bench-detail-frame.jpg" },
  { title: "Modular Floor Surface", thai: "แผ่นปูพื้นพลาสติกถอดเปลี่ยนได้", image: "/images/system-flooring.jpg", requestedImage: "/images/bench-detail-floor-panel.jpg" },
  { title: "Stable Legs", thai: "โครงสร้างขาแยกในแต่ละโมดูล", image: "/images/system-bench.jpg", requestedImage: "/images/bench-detail-leg.jpg" },
  { title: "Easy Maintenance", thai: "ล้างทำความสะอาดและดูแลรักษาง่าย", image: "/images/greenhouse.jpg", requestedImage: "/images/bench-detail-cleaning.jpg" },
];

const benchModels = [
  ["MODEL 01", [["Width", "100 cm"], ["Length", "150 cm"], ["Height", "90 cm"]]],
  ["MODEL 02", [["Width", "60 cm"], ["Length", "400 cm"], ["Height", "90 cm"]]],
];

const sharedSpecifications = [
  ["Structure", "Square Steel Tube"],
  ["Finish", "Matte White Powder Coat"],
  ["Top Surface", "White Modular Plastic Panels"],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function LineIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32" {...common}>
      {type === "modules" && <><rect x="4" y="5" width="10" height="9" rx="1" /><rect x="18" y="5" width="10" height="9" rx="1" /><rect x="4" y="18" width="10" height="9" rx="1" /><rect x="18" y="18" width="10" height="9" rx="1" /></>}
      {type === "extend" && <><path d="M4 16h24M20 11l5 5-5 5M12 11l-5 5 5 5" /><circle cx="16" cy="16" r="2" /></>}
      {type === "steel" && <><path d="M7 8h18v16H7zM11 8v16M21 8v16M7 12h4M21 12h4M7 20h4M21 20h4" /></>}
      {type === "clean" && <><path d="m7 22 11-11 5 5-11 11H7v-5ZM18 11l2-2 5 5-2 2M6 8h6M9 5v6" /></>}
      {type === "leaf" && <><path d="M25 6C14 6 7 12 7 22c10 1 16-5 18-16ZM7 22c3-5 7-8 12-10" /></>}
    </svg>
  );
}

function ModuleImage({ src, alt, scale, offsetY = 0 }: { src: string; alt: string; scale: number; offsetY?: number }) {
  return (
    <div className="flex h-[170px] items-center justify-center overflow-hidden rounded-[20px] bg-[#F7F8F4] px-5 py-7">
      <img src={src} alt={alt} className="h-full w-full object-contain object-center" style={{ filter: "drop-shadow(0 10px 9px rgba(54, 82, 64, 0.14))", transform: `translateY(${offsetY}px) scale(${scale})`, transformOrigin: "center" }} />
    </div>
  );
}

export default function GrowingBenchSystemPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#26352C]">
      <header className="sticky top-0 z-50 border-b border-[#26352C]/10 bg-[#F7F6F1]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" aria-label="The Little Tree home" className="flex items-center gap-3">
            <img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" />
            <div className="flex flex-col justify-center leading-none">
              <div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div>
              <div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div>
            </div>
          </a>
          <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 text-sm text-[#3E5145] md:flex" aria-label="Main navigation">
            <a href="/#solutions"><LocalizedText th="โซลูชัน" en="Solutions" /></a>
            <a href="/#spaces"><LocalizedText th="พื้นที่ใช้งาน" en="Spaces" /></a>
            <a href="/#products"><LocalizedText th="สินค้า" en="Products" /></a>
            <a href="/#about"><LocalizedText th="เกี่ยวกับเรา" en="About" /></a>
            <a href="/#contact" className="rounded-full bg-[#476A55] px-5 py-2.5 text-white"><LocalizedText th="ติดต่อเรา" en="Contact" /></a>
          </nav>
          <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="overflow-hidden border-b border-[#26352C]/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#64806C]">System 02</p>
            <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">Growing Bench<br />System</h1>
            <p className="mt-8 text-2xl font-medium leading-tight tracking-[-0.02em] text-[#476A55]">Modular. Clean.<br />Extendable.</p>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#68766C]">โต๊ะวางปลูกต้นไม้สำหรับโรงเรือน ฟาร์มแคคตัส และพื้นที่เพาะปลูก<br />ออกแบบให้ใช้งานง่าย จัดกระถางเป็นระเบียบ และสามารถต่อขยายความยาวได้ตามพื้นที่จริง</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white"><LocalizedText th="แชตผ่าน LINE" en="Chat via LINE" /> <Arrow /></a><a href="#details" className="rounded-full border border-[#476A55]/30 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#476A55]"><LocalizedText th="ดูรายละเอียด" en="View Details" /></a></div>
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 text-sm text-[#5E6F63] sm:grid-cols-4"><div><strong className="block text-[#26352C]">2 Models</strong><span className="mt-1 block text-xs">100 × 150 × 90 cm<br />60 × 400 × 90 cm</span></div><div><strong className="block text-[#26352C]">Matte White</strong><span className="mt-1 block text-xs">Powder-Coated Steel</span></div><div><strong className="block text-[#26352C]">Modular</strong><span className="mt-1 block text-xs">Designed for Growing Spaces</span></div><div><strong className="block text-[#26352C]">For Greenhouse</strong><span className="mt-1 block text-xs">Nursery &amp; Farm</span></div></div>
          </div>
          <div className="flex aspect-[1.08/1] items-center justify-center overflow-hidden rounded-[30px] bg-white p-5 shadow-[0_28px_70px_rgba(54,82,64,0.13)] sm:p-10"><img src="/images/system-bench.jpg" alt="The Little Tree Growing Bench System with white modular panels and steel frame" className="h-full w-full object-contain" /></div>
        </div>
      </section>

      <section aria-label="Key benefits" className="border-b border-[#26352C]/10 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-[#26352C]/10 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0 lg:px-10">{benefits.map((benefit) => <div key={benefit.title} className="flex items-center gap-4 px-3 py-6 lg:flex-col lg:items-start lg:px-5"><div className="text-[#476A55]"><LineIcon type={benefit.icon} /></div><div><h2 className="text-sm font-semibold">{benefit.title}</h2><p className="mt-1 text-[13px] text-[#758077]">{benefit.thai}</p></div></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Modular Bench System</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Two Models.<br />More Growing Space.</h2><p className="mt-5 text-base leading-8 text-[#68766C]">โต๊ะวางต้นไม้แบบโมดูลาร์ มีให้เลือก 2 ขนาด<br />รองรับการใช้งานทั้งแบบพื้นที่มาตรฐานและพื้นที่แคบยาว<br />ออกแบบให้ใช้งานง่าย แข็งแรง และเหมาะกับการจัดวางในโรงเรือน ฟาร์ม และพื้นที่เพาะปลูก</p></div><div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">{[["/images/bench-model-01.jpg", "MODEL 01 bench module", "MODEL 01", "100 × 150 × 90 cm", "กว้าง 100 ซม. · ยาว 150 ซม. · สูง 90 ซม.", "4 Legs · Standard bench module", 1.2, 8], ["/images/bench-model-02.jpg", "MODEL 02 bench module", "MODEL 02", "60 × 400 × 90 cm", "กว้าง 60 ซม. · ยาว 400 ซม. · สูง 90 ซม.", "Narrow Long Bench", 1.28, 0]].map(([image, alt, label, size, supporting, note, scale, offsetY]) => <article key={label as string} className="flex h-full flex-col rounded-[26px] border border-[#26352C]/[0.07] bg-white p-5 sm:p-6"><ModuleImage src={image as string} alt={alt as string} scale={scale as number} offsetY={offsetY as number} /><p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#8A9B8E]">{label as string}</p><h3 className="mt-2 text-2xl font-semibold">{size as string}</h3><p className="mt-2 text-base leading-7 text-[#68766C]">{supporting as string}</p><p className="mt-4 text-xs leading-5 text-[#8A948C]">{note as string}</p></article>)}</div></section>

      <section className="border-y border-[#26352C]/10 bg-[#EEF1EB]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Applications</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Built for Real<br />Growing Spaces.</h2><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{applications.map((item) => <article key={item.title} className="group"><div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={item.image} alt={`${item.title} application for the Growing Bench System`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm text-[#68766C]">{item.thai}</p></article>)}</div></div></section>

      <section id="details" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Structure</p><div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Simple Structure.<br />Made for Daily Use.</h2><p className="max-w-sm text-sm leading-7 text-[#68766C]">สะอาด เป็นระเบียบ และพร้อมทำงานในพื้นที่ปลูกทุกวัน</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{structureDetails.map((detail) => <article key={detail.title}><div className="aspect-square overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={detail.image} alt={detail.title} className="h-full w-full object-cover" /></div><h3 className="mt-5 text-lg font-semibold">{detail.title}</h3><p className="mt-2 text-sm leading-6 text-[#68766C]">{detail.thai}</p></article>)}</div></section>

      <section className="border-y border-[#26352C]/10 bg-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10 lg:py-24"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Bench Sizes</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Designed Around<br />Real Use.</h2></div><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{benchModels.map(([model, specs]) => <dl key={model as string} className="border-b border-[#26352C]/10 pb-5"><dt className="text-xs uppercase tracking-[0.16em] text-[#8A9B8E]">{model as string}</dt>{(specs as string[][]).map(([label, value]) => <div key={label} className="mt-4 flex items-baseline justify-between gap-4"><span className="text-sm text-[#68766C]">{label}</span><dd className="text-lg font-medium text-[#304539]">{value}</dd></div>)}</dl>)}<dl className="border-t border-[#26352C]/10 pt-5 sm:col-span-2"><dt className="text-xs uppercase tracking-[0.16em] text-[#8A9B8E]">Shared Specifications</dt><div className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-3">{sharedSpecifications.map(([label, value]) => <div key={label}><dt className="text-sm text-[#68766C]">{label}</dt><dd className="mt-1 text-base font-medium text-[#304539]">{value}</dd></div>)}</div></dl></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"><div className="rounded-[30px] bg-[#E9EEE8] px-7 py-12 sm:px-12 lg:grid lg:grid-cols-[1fr_0.7fr] lg:items-center lg:px-16 lg:py-16"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Optional Lab Concept</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">More Than a Bench.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#68766C]">สามารถพัฒนาต่อยอดเป็นโต๊ะเพาะปลูกสำหรับฟาร์มแคคตัส โรงเพาะ หรืองาน LAB ได้ในอนาคต โดยออกแบบอุปกรณ์เสริมตามการใช้งานจริง</p></div><div className="mt-8 border-l border-[#476A55]/25 pl-6 text-sm leading-7 text-[#5E6F63] lg:mt-0">A clean base system, ready to adapt as your growing space evolves.</div></div></section>

      <section id="contact" className="px-6 pb-20 lg:px-10 lg:pb-28"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[30px] bg-[#304539] px-7 py-12 text-white sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-16"><div><p className="text-xs uppercase tracking-[0.24em] text-[#B9C7BC]">Start a Project</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Let&apos;s Build Your Growing Space.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#CAD3CB]">ส่งขนาดพื้นที่หรือรูปหน้างานมาให้เรา ทีมงาน The Little Tree ช่วยแนะนำจำนวนโต๊ะและรูปแบบการจัดวางให้เหมาะกับพื้นที่จริง</p></div><div className="flex flex-wrap items-center gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#304539]">Chat via LINE <Arrow /></a><a href="https://www.facebook.com/TheLittletree.th" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm font-medium text-white">Facebook</a><a href="tel:0971922616" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm font-medium text-white">Call 097-192-2616</a></div></div></section>

      <footer className="border-t border-[#26352C]/10 bg-[#F7F6F1]"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto_1fr] lg:px-10"><div><a href="/" aria-label="The Little Tree home" className="flex items-center gap-3"><img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" /><div className="flex flex-col justify-center leading-none"><div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div><div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div></div></a></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#3E5145]" aria-label="Footer navigation"><a href="/#solutions">Solutions</a><a href="/#spaces">Spaces</a><a href="/#products">Products</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><p className="text-lg font-medium leading-tight lg:text-right">Growing Better Spaces<br /><span className="text-[#64806C]">For a Greener Tomorrow</span></p></div><div className="mx-auto max-w-7xl border-t border-[#26352C]/10 px-6 py-5 text-xs text-[#8A948C] lg:px-10">Made in Thailand</div></footer>
    </main>
  );
}
