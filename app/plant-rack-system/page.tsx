import LanguageSwitcher from "../components/LanguageSwitcher";
import LocalizedText from "../components/LocalizedText";
import { metadataFor } from "../lib/seo";

export const metadata = metadataFor("rack", "th");

const benefits = [
  ["More Vertical Space", "เพิ่มพื้นที่จัดวางในแนวตั้ง", "space"],
  ["Better Organization", "จัดต้นไม้เป็นระเบียบ", "organize"],
  ["Easy Access", "ดูแลต้นไม้ได้สะดวก", "access"],
  ["Flexible Layout", "ปรับตำแหน่งตามพื้นที่ได้", "layout"],
];

const rackHeights = [
  { label: "ALL SIZES", size: "30 × 100 × 30 / 60 / 90 cm", thai: "ชั้นวางรวม 3 ระดับความสูงในภาพเดียว เหมาะสำหรับดูภาพรวมของขนาด 30, 60 และ 90 ซม. เพื่อเลือกให้เหมาะกับพื้นที่ใช้งาน", note: "3 height options in one view", image: "/images/plant-rack-all-sizes.jpg", alt: "Plant rack showing all three height options" },
  { label: "TWO-TIER", size: "30 × 100 × 90 cm", thai: "ชั้นวาง 2 ชั้น ขนาด 30 × 100 × 90 ซม. เหมาะสำหรับเพิ่มพื้นที่จัดวางในแนวตั้ง โดยยังดูโปร่งและเป็นระเบียบ", note: "Top shelf + bottom shelf", image: "/images/plant-rack-two-tier-30x100x90.jpg", alt: "Two-tier plant rack measuring 30 by 100 by 90 centimeters" },
];

const structure = [
  ["Square Steel Tube", "โครงเหล็กกล่อง", "/images/plant-rack-square-steel-tube.jpg"],
  ["Powder-Coated Finish", "พ่นสีฝุ่นเพื่อความเรียบร้อยและทนทาน", "/images/plant-rack-powder-coated-finish.jpg"],
  ["Open Design", "โครงสร้างโปร่ง ระบายอากาศดี", "/images/greenhouse1.jpg"],
  ["Stable Base", "ฐานมั่นคง เหมาะกับการวางกระถางหลายใบ", "/images/featured-cactus-bench-system.jpg"],
];

const applications = [
  ["Cactus Farm", "ฟาร์มแคคตัส", "/images/cactus-farm.jpg"],
  ["Caladium / Ornamental Plants", "ฟาร์มบอนสีและไม้ประดับ", "/images/greenhouse-solution.jpg"],
  ["Nursery", "โรงเพาะชำ", "/images/greenhouse1.jpg"],
  ["Greenhouse", "โรงเรือน", "/images/greenhouse.jpg"],
  ["Plant Shop", "ร้านต้นไม้", "/images/featured-cactus-bench-system.jpg"],
  ["Home Garden", "บ้านและสวน", "/images/garden.jpg"],
];

const choosing = [
  ["Choose ALL SIZES if", "you want to compare 30 / 60 / 90 cm heights", "you want flexibility for different plant zones", "you use cactus, ornamental plants, greenhouse or nursery areas", "เหมาะสำหรับผู้ที่ต้องการเลือกความสูงให้เหมาะกับแต่ละพื้นที่ใช้งาน"],
  ["Choose TWO-TIER if", "you want more vertical display space", "you need two usable shelf levels", "you want to maximize growing space without increasing floor area", "เหมาะสำหรับพื้นที่ที่ต้องการเพิ่มพื้นที่จัดวางในแนวตั้ง"],
];

const systemLinks = [
  ["Flooring System", "พื้นโมดูลาร์สำหรับทางเดินและพื้นที่ใช้งาน", "/flooring-system", "/images/flooring-easy-connect.jpg"],
  ["Growing Bench System", "โต๊ะปลูกแบบโมดูลาร์", "/growing-bench-system", "/images/system-bench.jpg"],
  ["Modular Greenhouse System", "โครงสร้างหลักของพื้นที่ปลูก", "/modular-greenhouse-system", "/images/system-greenhouse.jpg"],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

function LineIcon({ type }: { type: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32" {...common}>
    {type === "space" && <><path d="M5 27V9h22v18M9 9V5h14v4M9 14h4M19 14h4M9 20h4M19 20h4" /><path d="M16 27V9" /></>}
    {type === "organize" && <><path d="M5 7h22v18H5zM10 12h4M18 12h4M10 18h4M18 18h4" /></>}
    {type === "access" && <><path d="M5 25h22M8 25V11h16v14M12 11V7h8v4M12 16h8" /></>}
    {type === "layout" && <><rect x="5" y="5" width="9" height="9" rx="1" /><rect x="18" y="18" width="9" height="9" rx="1" /><path d="m18 9 4-4 5 5M14 23l-4 4-5-5" /></>}
  </svg>;
}

export default function PlantRackSystemPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#26352C]">
      <header className="sticky top-0 z-50 border-b border-[#26352C]/10 bg-[#F7F6F1]/90 backdrop-blur-md"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"><a href="/" aria-label="The Little Tree home" className="flex items-center gap-3"><img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" /><div className="flex flex-col justify-center leading-none"><div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div><div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div></div></a><div className="flex items-center gap-6"><nav className="hidden items-center gap-8 text-sm text-[#3E5145] md:flex" aria-label="Main navigation"><a href="/#solutions"><LocalizedText th="โซลูชัน" en="Solutions" /></a><a href="/#spaces"><LocalizedText th="พื้นที่ใช้งาน" en="Spaces" /></a><a href="/#products"><LocalizedText th="สินค้า" en="Products" /></a><a href="/#about"><LocalizedText th="เกี่ยวกับเรา" en="About" /></a><a href="/#contact" className="rounded-full bg-[#476A55] px-5 py-2.5 text-white"><LocalizedText th="ติดต่อเรา" en="Contact" /></a></nav><LanguageSwitcher /></div></div></header>

      <section className="overflow-hidden border-b border-[#26352C]/10"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24"><div><p className="text-[11px] uppercase tracking-[0.28em] text-[#64806C]">System 03</p><h1 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">Plant Rack<br />System</h1><p className="mt-8 text-2xl font-medium leading-tight tracking-[-0.02em] text-[#476A55]">More Plants.<br />Better Organized.</p><p className="mt-6 max-w-xl text-base leading-8 text-[#68766C]">ชั้นวางต้นไม้โครงเหล็กกล่องสำหรับเพิ่มพื้นที่จัดวางในแนวตั้ง จัดต้นไม้ให้เป็นระเบียบ และเหมาะกับโรงเรือน ฟาร์ม ร้านต้นไม้ และบ้านสวน</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white">Chat via LINE <Arrow /></a><a href="#heights" className="rounded-full border border-[#476A55]/30 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#476A55]">View Sizes</a></div><div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-[#6E7D72]"><span>Square Steel Tube</span><span>Powder-Coated</span><span>Custom Sizes Available</span></div></div><div className="overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_28px_70px_rgba(54,82,64,0.13)] sm:p-10"><img src="/images/system-rack.jpg" alt="The Little Tree Plant Rack System" className="h-auto w-full object-contain" /></div></div></section>

      <section className="border-b border-[#26352C]/10 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-[#26352C]/10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-10">{benefits.map(([title, thai, icon]) => <div key={title} className="flex items-center gap-4 px-3 py-6 lg:flex-col lg:items-start lg:px-5"><div className="text-[#476A55]"><LineIcon type={icon} /></div><div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-1 text-[13px] text-[#758077]">{thai}</p></div></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Why Plant Rack</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">More Growing Space.<br />Without Using More Floor.</h2><p className="mt-5 text-base leading-8 text-[#68766C]">ชั้นวางต้นไม้ช่วยเพิ่มพื้นที่ใช้งานในแนวตั้ง ทำให้สามารถจัดต้นไม้ได้มากขึ้นโดยไม่ต้องใช้พื้นที่พื้นเพิ่ม เหมาะกับโรงเรือน ฟาร์ม ร้านต้นไม้ และพื้นที่ปลูกที่ต้องการความเป็นระเบียบ</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title, thai]) => <article key={title} className="rounded-[22px] border border-[#26352C]/[0.07] bg-white p-6"><div className="text-sm font-semibold">{title}</div><p className="mt-3 text-sm leading-6 text-[#68766C]">{thai}</p></article>)}</div></section>

      <section id="heights" className="border-y border-[#26352C]/10 bg-[#EEF1EB]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Size Options</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Choose the Setup<br />That Fits Your Space.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#68766C]">เลือกชั้นวางที่เหมาะกับพื้นที่ใช้งานของคุณ ทั้งแบบรวมหลายความสูงในภาพเดียว และแบบ 2 ชั้นสำหรับการจัดวางที่เป็นระเบียบมากขึ้น</p><div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">{rackHeights.map((rack) => <article key={rack.label} className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#26352C]/[0.07] bg-white"><div className="flex h-[340px] shrink-0 items-center justify-center overflow-hidden rounded-[20px] bg-[#F7F8F4] px-6 py-8 sm:h-[430px] sm:px-10 sm:py-10 lg:h-[460px]"><img src={rack.image} alt={rack.alt} className="h-full w-full object-contain" /></div><div className="flex flex-1 flex-col p-6 sm:p-7"><p className="text-xs tracking-[0.22em] text-[#8A9B8E]">{rack.label}</p><h3 className="mt-3 text-2xl font-semibold">{rack.size}</h3><p className="mt-3 text-sm leading-6 text-[#68766C]">{rack.thai}</p><p className="mt-5 border-l-2 border-[#476A55] pl-3 text-xs leading-5 text-[#476A55]">{rack.note}</p></div></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Structure</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Simple Structure.<br />Built for Everyday Use.</h2><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{structure.map(([title, thai, image]) => <article key={title}><div className="aspect-square overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={image} alt={title} className="h-full w-full object-cover" /></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#68766C]">{thai}</p></article>)}</div></section>

      <section className="border-y border-[#26352C]/10 bg-[#EEF1EB]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Applications</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Made for Different<br />Growing Environments.</h2><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{applications.map(([title, thai, image]) => <article key={title} className="group"><div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={image} alt={`${title} application for the Plant Rack System`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm text-[#68766C]">{thai}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Custom Size</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Need a Different Size?</h2><p className="mt-5 text-base leading-8 text-[#68766C]">นอกจากขนาดมาตรฐานแล้ว The Little Tree สามารถพัฒนาขนาดอื่นให้เหมาะกับพื้นที่จริง จำนวนกระถาง และรูปแบบการใช้งานของลูกค้าได้</p></div><div className="grid gap-4 sm:grid-cols-3">{[["Different Width", "ปรับความกว้างได้ตามพื้นที่"], ["Different Height", "ปรับความสูงได้ตามการใช้งาน"], ["Custom Layout", "ออกแบบตำแหน่งชั้นตามงานจริง"]].map(([title, thai]) => <article key={title} className="rounded-[22px] border border-[#26352C]/10 bg-white p-6"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#68766C]">{thai}</p></article>)}</div></div></section>

      <section className="border-y border-[#26352C]/10 bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">How to Choose</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Which Setup Is Right<br />for You?</h2><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">{choosing.map(([title, first, second, third, thai]) => <article key={title} className="flex h-full flex-col rounded-[24px] bg-[#F7F6F1] p-6"><h3 className="text-lg font-semibold">{title}</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#526459]"><li>• {first}</li><li>• {second}</li><li>• {third}</li></ul><p className="mt-5 flex-1 border-t border-[#26352C]/10 pt-4 text-sm leading-6 text-[#68766C]">{thai}</p></article>)}</div></div></section>

      <section className="border-y border-[#26352C]/10 bg-[#304539] text-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#B9C7BC]">Part of The Little Tree System</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Works Better Together.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#CAD3CB]">Plant Rack System สามารถใช้งานร่วมกับ Flooring System, Growing Bench System และ Modular Greenhouse System เพื่อให้พื้นที่ปลูกเป็นระบบเดียวกัน</p><div className="mt-12 grid gap-4 md:grid-cols-3">{systemLinks.map(([title, thai, href, image]) => <a key={title} href={href} className="group overflow-hidden rounded-[24px] bg-white text-[#26352C]"><div className="aspect-[4/3] overflow-hidden bg-[#DDE8DF]"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><div className="p-5"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#68766C]">{thai}</p><span className="mt-4 inline-flex text-sm text-[#476A55]">View System <Arrow /></span></div></a>)}</div></div></section>

      <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[30px] bg-[#E9EEE8] px-7 py-12 sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-16"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Start a Project</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Not Sure Which Size Fits?</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#68766C]">ส่งขนาดพื้นที่ รูปหน้างาน หรือจำนวนกระถางมาให้เรา ทีมงาน The Little Tree ช่วยแนะนำขนาดและรูปแบบที่เหมาะกับพื้นที่จริง</p></div><div className="flex flex-wrap items-center gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white">Chat via LINE <Arrow /></a><a href="https://www.facebook.com/TheLittletree.th" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#476A55]/20 bg-white px-5 py-3.5 text-sm font-medium text-[#476A55]">Facebook</a><a href="tel:0971922616" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#476A55]/20 bg-white px-5 py-3.5 text-sm font-medium text-[#476A55]">Call 097-192-2616</a></div></div></section>

      <footer className="border-t border-[#26352C]/10 bg-[#F7F6F1]"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto_1fr] lg:px-10"><div><a href="/" aria-label="The Little Tree home" className="flex items-center gap-3"><img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" /><div className="flex flex-col justify-center leading-none"><div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div><div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div></div></a></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#3E5145]" aria-label="Footer navigation"><a href="/#solutions">Solutions</a><a href="/#spaces">Spaces</a><a href="/#products">Products</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><p className="text-lg font-medium leading-tight lg:text-right">Growing Better Spaces<br /><span className="text-[#64806C]">For a Greener Tomorrow</span></p></div><div className="mx-auto max-w-7xl border-t border-[#26352C]/10 px-6 py-5 text-xs text-[#8A948C] lg:px-10">Made in Thailand</div></footer>
    </main>
  );
}
