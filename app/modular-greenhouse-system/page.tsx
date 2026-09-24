import LanguageSwitcher from "../components/LanguageSwitcher";
import LocalizedText from "../components/LocalizedText";
import { metadataFor } from "../lib/seo";

export const metadata = metadataFor("greenhouse", "th");

const benefits = [
  { title: "Modular Structure", thai: "ต่อขยายและปรับรูปแบบได้", icon: "grid" },
  { title: "Custom Size", thai: "ออกแบบตามพื้นที่จริง", icon: "fit" },
  { title: "Durable Steel Frame", thai: "โครงสร้างแข็งแรง", icon: "frame" },
  { title: "Easy to Upgrade", thai: "เพิ่มระบบภายในภายหลังได้", icon: "plus" },
  { title: "Complete Growing System", thai: "รองรับพื้น โต๊ะ และชั้นวาง", icon: "system" },
];

const concepts = [
  { label: "SINGLE", title: "Single Module", thai: "เหมาะสำหรับพื้นที่เริ่มต้น", image: "/images/greenhouse-single-module.jpg" },
  { label: "DOUBLE", title: "Double Module", thai: "ขยายพื้นที่ปลูกให้มากขึ้นในรูปแบบที่ยังเป็นสัดส่วนและใช้งานง่าย", image: "/images/greenhouse-double-module.jpg" },
  { label: "TRIPLE", title: "Triple Module", thai: "รองรับพื้นที่ใช้งานที่ใหญ่ขึ้น และต่อยอดระบบได้อย่างเป็นระเบียบ", image: "/images/greenhouse-triple-module.jpg" },
];

const structure = [
  { title: "Steel Frame", thai: "โครงเหล็กกล่องแข็งแรง", image: "/images/greenhouse-single-module.jpg", requestedImage: "/images/greenhouse-detail-frame.jpg" },
  { title: "Powder-Coated Finish", thai: "พ่นสีฝุ่นเพื่อความเรียบร้อยและทนทาน", image: "/images/plant-rack-powder-coated-finish.jpg", requestedImage: "/images/greenhouse-detail-powdercoat.jpg" },
  { title: "Modular Connections", thai: "ออกแบบเพื่อการถอดประกอบและต่อขยาย", image: "/images/factory-assembly-finishing.jpg", requestedImage: "/images/greenhouse-detail-connection.jpg" },
  { title: "Custom Roof & Enclosure", thai: "สามารถออกแบบหลังคาและผนังตามการใช้งาน", image: "/images/hero-greenhouse.jpg", requestedImage: "/images/greenhouse-detail-roof.jpg" },
];

const applications = [
  { title: "Cactus Greenhouse", thai: "โรงเรือนแคคตัส", image: "/images/cactus-farm.jpg", requestedImage: "/images/greenhouse-cactus.jpg" },
  { title: "Plant Nursery", thai: "โรงเพาะต้นไม้", image: "/images/greenhouse1.jpg", requestedImage: "/images/greenhouse-nursery.jpg" },
  { title: "Ornamental Plant Farm", thai: "ฟาร์มไม้ประดับ", image: "/images/greenhouse-solution.jpg", requestedImage: "/images/greenhouse-ornamental.jpg" },
  { title: "Farm & Utility", thai: "พื้นที่ฟาร์มและงานอเนกประสงค์", image: "/images/farm-utility.jpg", requestedImage: "/images/greenhouse-farm.jpg" },
];

const systems = [
  { no: "01", title: "Flooring System", thai: "พื้นโมดูลาร์สำหรับทางเดินและพื้นที่ใช้งาน", href: "/flooring-system", image: "/images/system-flooring.jpg" },
  { no: "02", title: "Growing Bench System", thai: "โต๊ะปลูกแบบโมดูลาร์", href: "/growing-bench-system", image: "/images/system-bench.jpg" },
  { no: "03", title: "Plant Rack System", thai: "ชั้นวางกระถางหลายระดับ", href: "/plant-rack-system", image: "/images/system-rack.jpg" },
  { no: "04", title: "Modular Greenhouse System", thai: "โครงสร้างหลักของพื้นที่ปลูก", href: "/modular-greenhouse-system", image: "/images/system-greenhouse.jpg" },
];

const process = [
  ["01", "SITE INFORMATION", "ส่งขนาดพื้นที่หรือรูปหน้างาน"],
  ["02", "LAYOUT DESIGN", "วางตำแหน่งโครงสร้างและพื้นที่ใช้งาน"],
  ["03", "SYSTEM PLANNING", "เลือก Flooring / Bench / Rack ที่เหมาะสม"],
  ["04", "PRODUCTION & INSTALLATION", "ผลิตและติดตั้งตามแบบที่ตกลง"],
];

const options = ["Greenhouse Size", "Roof Style", "Structure Layout", "Bench Layout", "Rack Layout", "Flooring Layout", "Shade System Ready", "Custom Growing Workflow"];

function Arrow() { return <span aria-hidden="true">→</span>; }

function LineIcon({ type }: { type: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32" {...common}>
    {type === "grid" && <><rect x="5" y="5" width="8" height="8" rx="1" /><rect x="19" y="5" width="8" height="8" rx="1" /><rect x="5" y="19" width="8" height="8" rx="1" /><rect x="19" y="19" width="8" height="8" rx="1" /></>}
    {type === "fit" && <><path d="M5 12V5h7M27 12V5h-7M5 20v7h7M27 20v7h-7" /><path d="m10 10-5-5m17 5 5-5M10 22l-5 5m17-5 5 5" /></>}
    {type === "frame" && <><path d="M6 26V8h20v18M6 14h20M12 8v18M20 8v18" /><path d="M3 26h26" /></>}
    {type === "plus" && <><circle cx="16" cy="16" r="11" /><path d="M16 10v12M10 16h12" /></>}
    {type === "system" && <><path d="M5 8h9v8H5zM18 8h9v8h-9zM5 20h9v8H5zM18 20h9v8h-9z" /><path d="M14 12h4M14 24h4" /></>}
  </svg>;
}

export default function ModularGreenhouseSystemPage() {
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
          <div className="flex items-center gap-6"><nav className="hidden items-center gap-8 text-sm text-[#3E5145] md:flex" aria-label="Main navigation"><a href="/#solutions"><LocalizedText th="โซลูชัน" en="Solutions" /></a><a href="/#spaces"><LocalizedText th="พื้นที่ใช้งาน" en="Spaces" /></a><a href="/#products"><LocalizedText th="สินค้า" en="Products" /></a><a href="/#about"><LocalizedText th="เกี่ยวกับเรา" en="About" /></a><a href="/#contact" className="rounded-full bg-[#476A55] px-5 py-2.5 text-white"><LocalizedText th="ติดต่อเรา" en="Contact" /></a></nav><LanguageSwitcher /></div>
        </div>
      </header>

      <section className="overflow-hidden border-b border-[#26352C]/10"><div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24"><div className="min-w-0"><p className="text-[11px] uppercase tracking-[0.28em] text-[#64806C]">System 04</p><h1 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">Modular<br />Greenhouse<br />System</h1><p className="mt-8 text-2xl font-medium leading-tight tracking-[-0.02em] text-[#476A55]">Designed Around<br />Your Space.</p><p className="mt-6 max-w-xl text-[16px] leading-8 text-[#68766C]">โรงเรือนโครงเหล็กแบบโมดูลาร์ ออกแบบตามขนาดพื้นที่จริง<br />สามารถถอดประกอบ ต่อขยาย หรือปรับรูปแบบได้ตามการใช้งาน<br />รองรับทั้งฟาร์มแคคตัส โรงเพาะ พื้นที่ปลูก และงานเกษตรสมัยใหม่</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white">Chat via LINE <Arrow /></a><a href="#system" className="rounded-full border border-[#476A55]/30 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#476A55]">Explore the System</a></div><div className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 text-sm text-[#5E6F63] sm:grid-cols-4"><div><strong className="block text-[#26352C]">Custom Size</strong><span className="mt-1 block text-xs">ออกแบบตามพื้นที่จริง</span></div><div><strong className="block text-[#26352C]">Modular Structure</strong><span className="mt-1 block text-xs">ต่อขยายได้</span></div><div><strong className="block text-[#26352C]">Powder-Coated Steel</strong><span className="mt-1 block text-xs">โครงเหล็กพ่นสีฝุ่น</span></div><div><strong className="block text-[#26352C]">Integrated System</strong><span className="mt-1 block text-xs">Flooring • Bench • Rack</span></div></div></div><div className="min-w-0 overflow-hidden rounded-[30px] bg-white p-6 shadow-[0_28px_70px_rgba(54,82,64,0.13)] sm:p-10"><img src="/images/system-greenhouse.jpg" alt="The Little Tree modular greenhouse structure" className="h-auto w-full object-contain" /></div></div></section>

      <section aria-label="Key benefits" className="border-b border-[#26352C]/10 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-[#26352C]/10 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0 lg:px-10">{benefits.map((benefit) => <div key={benefit.title} className="flex items-center gap-4 px-3 py-6 lg:flex-col lg:items-start lg:px-5"><div className="shrink-0 text-[#476A55]"><LineIcon type={benefit.icon} /></div><div><h2 className="text-sm font-semibold">{benefit.title}</h2><p className="mt-1 text-[13px] leading-5 text-[#758077]">{benefit.thai}</p></div></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Modular Design</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Start Small.<br />Expand When You Need.</h2><p className="mt-5 text-base leading-8 text-[#68766C]">ระบบโรงเรือนถูกออกแบบเป็นโมดูล ทำให้สามารถเริ่มจากขนาดที่เหมาะกับพื้นที่ปัจจุบัน และต่อขยายในอนาคตได้โดยไม่จำเป็นต้องสร้างใหม่ทั้งหมด</p></div><div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">{concepts.map((item) => <article key={item.label} className="flex h-full flex-col overflow-hidden rounded-[26px] border border-[#26352C]/[0.07] bg-white"><div className="aspect-[4/3] shrink-0 overflow-hidden bg-[#DDE8DF]"><img src={item.image} alt={`${item.title} modular greenhouse concept`} className="h-full w-full object-cover" /></div><div className="flex flex-1 flex-col p-6"><p className="text-xs tracking-[0.22em] text-[#8A9B8E]">{item.label}</p><h3 className="mt-3 text-2xl font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#68766C]">{item.thai}</p></div></article>)}</div></section>

      <section className="border-y border-[#26352C]/10 bg-[#EEF1EB]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Structure</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A Clean Structure<br />Built for Real Use.</h2><div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">{structure.map((item) => <article key={item.title} className="flex h-full flex-col"><div className="aspect-square shrink-0 overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={item.image} alt={item.title} className="h-full w-full object-cover" /></div><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-[#68766C]">{item.thai}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Applications</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Built for Different<br />Growing Environments.</h2><div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">{applications.map((item) => <article key={item.title} className="group flex h-full flex-col"><div className="aspect-[4/3] shrink-0 overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={item.image} alt={`${item.title} application`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-[#68766C]">{item.thai}</p></article>)}</div></section>

      <section id="system" className="border-y border-[#26352C]/10 bg-[#304539] text-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#B9C7BC]">One Complete System</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">From Structure<br />to Growing Space.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#CAD3CB]">โรงเรือนสามารถทำงานร่วมกับผลิตภัณฑ์ของ The Little Tree ได้ทั้งระบบ ตั้งแต่พื้น โต๊ะปลูก ชั้นวาง ไปจนถึงโครงสร้างโรงเรือน ช่วยให้พื้นที่ดูเป็นระเบียบ ใช้งานง่าย และพร้อมสำหรับการขยายในอนาคต</p><div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">{systems.map((item) => <a key={item.no} href={item.href} className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white text-[#26352C]"><div className="flex aspect-[4/3] shrink-0 items-center justify-center overflow-hidden bg-[#DDE8DF] p-2"><img src={item.image} alt={item.title} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]" /></div><div className="flex flex-1 flex-col p-5"><p className="text-xs tracking-[0.2em] text-[#8A9B8E]">SYSTEM {item.no}</p><h3 className="mt-3 font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#68766C]">{item.thai}</p><span className="mt-5 inline-flex text-sm text-[#476A55]">View System <Arrow /></span></div></a>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">How We Work</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Designed from<br />the Actual Space.</h2></div><div className="divide-y divide-[#26352C]/10 border-y border-[#26352C]/10">{process.map(([no, title, thai]) => <div key={no} className="grid gap-3 py-6 sm:grid-cols-[70px_1fr] sm:items-center"><span className="text-sm tracking-[0.2em] text-[#8A9B8E]">{no}</span><div><h3 className="text-sm font-semibold tracking-[0.12em]">{title}</h3><p className="mt-2 text-sm text-[#68766C]">{thai}</p></div></div>)}</div></div></section>

      <section className="border-y border-[#26352C]/10 bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Customization</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Built Around<br />How You Grow.</h2><p className="mt-5 max-w-xl text-base leading-8 text-[#68766C]">สามารถปรับขนาด รูปทรง และการจัดพื้นที่ภายใน ให้เหมาะกับชนิดต้นไม้ รูปแบบการดูแล และหน้างานจริง</p><div className="mt-10 flex max-w-4xl flex-wrap gap-3">{options.map((option) => <span key={option} className="rounded-full border border-[#476A55]/20 bg-[#F7F6F1] px-5 py-3 text-sm text-[#476A55]">{option}</span>)}</div></div></section>

      <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[30px] bg-[#304539] px-7 py-12 text-white sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-16"><div><p className="text-xs uppercase tracking-[0.24em] text-[#B9C7BC]">Start a Project</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Let&apos;s Design Your Growing Space.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#CAD3CB]">มีพื้นที่อยู่แล้วแต่ยังไม่แน่ใจว่าจะวางระบบอย่างไร ส่งขนาดพื้นที่หรือรูปหน้างานมาให้เรา ทีมงาน The Little Tree ช่วยวางแนวทางให้เหมาะกับการใช้งานจริง</p></div><div className="flex flex-wrap items-center gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#304539]">Chat via LINE <Arrow /></a><a href="https://www.facebook.com/TheLittletree.th" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm font-medium text-white">Facebook</a><a href="tel:0971922616" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm font-medium text-white">Call 097-192-2616</a></div></div></section>

      <footer className="border-t border-[#26352C]/10 bg-[#F7F6F1]"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto_1fr] lg:px-10"><div><a href="/" aria-label="The Little Tree home" className="flex items-center gap-3"><img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" /><div className="flex flex-col justify-center leading-none"><div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div><div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div></div></a></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#3E5145]" aria-label="Footer navigation"><a href="/#solutions">Solutions</a><a href="/#spaces">Spaces</a><a href="/#products">Products</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><p className="text-lg font-medium leading-tight lg:text-right">Growing Better Spaces<br /><span className="text-[#64806C]">For a Greener Tomorrow</span></p></div><div className="mx-auto max-w-7xl border-t border-[#26352C]/10 px-6 py-5 text-xs text-[#8A948C] lg:px-10">Made in Thailand</div></footer>
    </main>
  );
}
