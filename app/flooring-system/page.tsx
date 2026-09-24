import LanguageSwitcher from "../components/LanguageSwitcher";
import LocalizedText from "../components/LocalizedText";
import { metadataFor } from "../lib/seo";

export const metadata = metadataFor("flooring", "th");

const benefits = [
  { title: "Durable", thai: "แข็งแรง ทนทาน", icon: "shield" },
  { title: "UV Resistant", thai: "ทนแดด ทนสภาพอากาศ", icon: "sun" },
  { title: "Water Drainage", thai: "ระบายน้ำได้ดี", icon: "water" },
  { title: "Easy Installation", thai: "ติดตั้งง่าย", icon: "connect" },
  { title: "Modular System", thai: "ต่อขยายได้ตามพื้นที่", icon: "grid" },
];

const applications = [
  {
    title: "Garden Walkway",
    thai: "ทางเดินในสวน",
    image: "/images/garden.jpg",
    requestedImage: "/images/flooring-garden.jpg",
  },
  {
    title: "Greenhouse Floor",
    thai: "พื้นโรงเพาะ / โรงเรือน",
    image: "/images/greenhouse-solution.jpg",
    requestedImage: "/images/flooring-greenhouse.jpg",
  },
  {
    title: "Cactus Farm / Plant Area",
    thai: "พื้นที่ปลูกแคคตัสและไม้กระถาง",
    image: "/images/cactus-farm.jpg",
    requestedImage: "/images/flooring-cactus.jpg",
  },
  {
    title: "Farm & Utility",
    thai: "พื้นที่ฟาร์มและงานอเนกประสงค์",
    image: "/images/farm-utility.jpg",
    requestedImage: "/images/flooring-farm.jpg",
  },
];

const models = [
  { no: "01", href: "/flooring-system/model-01", title: "Plastic Slat [Super Strong]", size: "30 × 100 × 3.4 cm", image: "/images/model-01-application.jpg", productImage: "/images/model-01-white.png", badge: "Heavy Duty / 1000 kg" },
  { no: "02", href: "/flooring-system/model-02", title: "Plastic Slat [Best Seller]", size: "30 × 100 × 5 cm", image: "/images/model-02-application.jpg", productImage: "/images/model-02-white.png", badge: "Best Seller / Greenhouse Use" },
  { no: "03", href: "/flooring-system/model-03", title: "Plastic Slat", size: "30 × 50 × 5 cm", image: "/images/model-03-application.jpg", productImage: "/images/model-03-white.jpg", badge: "For Small Areas" },
  { no: "04", href: "/flooring-system/model-04", title: "Plastic Slat [Super Strong]", size: "30 × 100 × 3.4 cm", image: "/images/model-04-application.jpg", productImage: "/images/model-04-white.jpg", badge: "Walkway / Cart Friendly" },
  { no: "05", href: "/flooring-system/model-05", title: "Plastic Slat", size: "25 × 100 × 5 cm", image: "/images/model-05-application.jpg", productImage: "/images/model-05-white.jpg", badge: "Pig Farm / Nursery Pen" },
  { no: "06", href: "/flooring-system/model-06", title: "Plastic Slat", size: "25 × 25 × 5 cm", image: "/images/model-06-application.jpg", productImage: "/images/model-06-white.jpg", badge: "4-Side Connection" },
];

const details = [
  {
    title: "Easy Connect",
    thai: "ต่อได้ 4 ด้าน ติดตั้งง่าย",
    image: "/images/flooring-easy-connect.jpg",
    requestedImage: "/images/floor-detail-connect.jpg",
  },
  {
    title: "Drainage Design",
    thai: "ระบายน้ำได้ดี ไม่ขัง",
    image: "/images/featured-farm-floor-application.jpg",
    requestedImage: "/images/floor-detail-drainage.jpg",
  },
  {
    title: "Strong Structure",
    thai: "โครงสร้างแข็งแรง",
    image: "/images/flooring-strong-structure.jpg",
    requestedImage: "/images/floor-detail-structure.jpg",
  },
  {
    title: "UV & Weather Resistant",
    thai: "ทนแดด ทนฝน ใช้งานได้ยาวนาน",
    image: "/images/flooring-uv-weather-resistant.jpg",
    requestedImage: "/images/floor-detail-weather.jpg",
  },
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
      {type === "shield" && <path d="M16 3.8 25 7v7.2c0 6-3.7 10.8-9 14-5.3-3.2-9-8-9-14V7l9-3.2Z" />}
      {type === "sun" && <><circle cx="16" cy="16" r="5" /><path d="M16 3v4m0 18v4M3 16h4m18 0h4M6.8 6.8l2.8 2.8m12.8 12.8 2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" /></>}
      {type === "water" && <path d="M16 4s7 7.2 7 13a7 7 0 0 1-14 0c0-5.8 7-13 7-13Zm-3.3 13.5a3.5 3.5 0 0 0 3.3 3.3" />}
      {type === "connect" && <><path d="M12 20H9a5 5 0 0 1 0-10h3m8 0h3a5 5 0 0 1 0 10h-3M10 16h12" /><path d="M16 7v18" /></>}
      {type === "grid" && <><rect x="5" y="5" width="8" height="8" rx="1" /><rect x="19" y="5" width="8" height="8" rx="1" /><rect x="5" y="19" width="8" height="8" rx="1" /><rect x="19" y="19" width="8" height="8" rx="1" /></>}
    </svg>
  );
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-contain"
    />
  );
}

export default function FlooringSystemPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] text-[#26352C]">
      <header className="sticky top-0 z-50 border-b border-[#26352C]/10 bg-[#F7F6F1]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" aria-label="The Little Tree home" className="flex items-center gap-3 shrink-0">
            <img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] md:h-[38px] w-auto shrink-0 object-contain" />
            <div className="flex flex-col justify-center leading-none">
              <div className="text-[16px] md:text-[18px] font-semibold tracking-[0.18em] text-[#22352B]">THE LITTLE TREE</div>
              <div className="mt-[5px] text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-[#6C8575]">GARDEN &amp; FARM SOLUTIONS</div>
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#64806C]">Modular Flooring System</p>
            <h1 className="mt-6 text-6xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">Flooring<br />System</h1>
            <p className="mt-8 text-2xl font-medium leading-tight tracking-[-0.02em] text-[#476A55]">6 Models. One System.<br />More Possibilities.</p>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#68766C]">แผ่นปูพื้นพลาสติกแบบโมดูลาร์ สำหรับสวน โรงเรือน ฟาร์ม ทางเดิน พื้นที่เปียก และงานอเนกประสงค์<br />มีทั้งหมด 6 รุ่น เพื่อให้เลือกตามพื้นที่และลักษณะการใช้งาน</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white"><LocalizedText th="แชตผ่าน LINE" en="Chat via LINE" /> <Arrow /></a>
              <a href="#models" className="rounded-full border border-[#476A55]/30 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#476A55]"><LocalizedText th="ดูรุ่นสินค้า" en="View Models" /></a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-[#6E7D72]"><span>Designed for real use</span><span>Made in Thailand</span><span>Outdoor Ready</span></div>
          </div>
          <div className="aspect-[1.06/1] overflow-hidden rounded-[30px] bg-[#EEF2EE] shadow-[0_28px_70px_rgba(54,82,64,0.13)]">
            <img src="/images/system-flooring.jpg" alt="The Little Tree modular flooring system" className="h-full w-full object-contain object-center p-2" style={{ objectPosition: 'center center' }} />
          </div>
        </div>
      </section>

      <section aria-label="Key benefits" className="border-b border-[#26352C]/10 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#26352C]/10 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0 lg:px-10">
          {benefits.map((benefit) => <div key={benefit.title} className="flex items-center gap-4 px-3 py-6 lg:flex-col lg:items-start lg:px-5"><div className="text-[#476A55]"><LineIcon type={benefit.icon} /></div><div><h2 className="text-sm font-semibold">{benefit.title}</h2><p className="mt-1 text-[13px] text-[#758077]">{benefit.thai}</p></div></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Applications</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">More Spaces<br />for a Greener Life.</h2><p className="mt-5 text-base leading-8 text-[#68766C]">รองรับทุกพื้นที่การใช้งาน ทั้งสวน โรงเรือน ฟาร์ม ทางเดิน พื้นที่เปียก และงานอเนกประสงค์<br />ตอบโจทย์ทั้งมืออาชีพและคนรักต้นไม้</p></div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{applications.map((item) => <article key={item.title} className="group"><div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={item.image} alt={item.thai} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm text-[#68766C]">{item.thai}</p></article>)}</div>
      </section>

      <section id="models" className="border-y border-[#26352C]/10 bg-[#EEF1EB]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Our Models</p><div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">6 Models for<br />Every Need.</h2><p className="max-w-sm text-sm leading-7 text-[#68766C]">เลือกขนาดและรูปแบบที่เหมาะกับพื้นที่ของคุณ</p></div><div className="mt-12 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">{models.map((model) => <a key={model.no} href={`${model.href}#top`} className="group block h-full overflow-hidden rounded-[24px] border border-[#26352C]/[0.06] bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(31,51,41,0.08)] cursor-pointer"><article className="box-border grid h-[278px] w-full grid-rows-[164px_114px] overflow-hidden rounded-[24px] bg-white"><div className="relative h-[164px] w-full shrink-0 overflow-hidden bg-[#DDE8DF]"><img src={model.image} alt={`${model.title} Model ${model.no} use case`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-[#26352C]/45 via-transparent to-transparent" /><span className="absolute left-4 top-4 rounded-full bg-[#304539]/90 px-3 py-1.5 text-[10px] tracking-[0.08em] text-white">{model.badge}</span></div><div className="box-border grid h-[114px] grid-rows-[22px_1fr_22px] border-t border-[#26352C]/10 p-4"><div className="flex items-end justify-between gap-3"><span className="inline-flex items-end text-xs tracking-[0.2em] text-[#8A9B8E]">MODEL {model.no}</span><span className="inline-flex items-end text-sm font-medium">{model.size}</span></div><div className="block" /><div className="self-end"><p className="line-clamp-2 text-sm font-semibold leading-5 text-[#304539]">{model.title}</p></div></div></article></a>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Details That Make a Difference</p><div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Built for Real Use.</h2><p className="text-sm leading-7 text-[#68766C]">ทุกรายละเอียดถูกออกแบบมาเพื่อการใช้งานจริง</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{details.map((detail) => <article key={detail.title}><div className="aspect-square overflow-hidden rounded-[24px] bg-[#DDE8DF]"><img src={detail.image} alt={detail.title} className="h-full w-full object-cover" /></div><h3 className="mt-5 text-lg font-semibold">{detail.title}</h3><p className="mt-2 text-sm leading-6 text-[#68766C]">{detail.thai}</p></article>)}</div></section>

      <section id="contact" className="px-6 pb-20 lg:px-10 lg:pb-28"><div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[30px] bg-[#304539] px-7 py-12 text-white sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-16"><div><p className="text-xs uppercase tracking-[0.24em] text-[#B9C7BC]">Start a Project</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Let&apos;s Build a Better Growing Space Together.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-[#CAD3CB]">ปรึกษาเราได้เลย ทีมงาน The Little Tree พร้อมแนะนำโซลูชันที่เหมาะกับพื้นที่ของคุณ</p></div><div className="flex flex-wrap items-center gap-3"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#304539]">Chat via LINE <Arrow /></a><a href="https://www.facebook.com/TheLittletree.th" target="_blank" rel="noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm font-medium text-white">Facebook</a><a href="tel:0971922616" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm font-medium text-white">Call 097-192-2616</a></div></div></section>

      <footer className="border-t border-[#26352C]/10 bg-[#F7F6F1]"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto_1fr] lg:px-10"><div><a href="/" aria-label="The Little Tree home" className="flex items-center gap-3"><img src="/images/little-tree-icon.png" alt="The Little Tree" className="h-[32px] w-auto shrink-0 object-contain md:h-[38px]" /><div className="flex flex-col justify-center leading-none"><div className="text-[16px] font-semibold tracking-[0.18em] text-[#22352B] md:text-[18px]">THE LITTLE TREE</div><div className="mt-[5px] text-[9px] uppercase tracking-[0.22em] text-[#6C8575] md:text-[10px]">GARDEN &amp; FARM SOLUTIONS</div></div></a></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#3E5145]" aria-label="Footer navigation"><a href="/#solutions">Solutions</a><a href="/#spaces">Spaces</a><a href="/#products">Products</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav><p className="text-lg font-medium leading-tight lg:text-right">Growing Better Spaces<br /><span className="text-[#64806C]">For a Greener Tomorrow</span></p></div><div className="mx-auto max-w-7xl border-t border-[#26352C]/10 px-6 py-5 text-xs text-[#8A948C] lg:px-10">Made in Thailand</div></footer>
    </main>
  );
}
