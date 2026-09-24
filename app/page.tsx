import LanguageSwitcher from "./components/LanguageSwitcher";
import LocalizedText from "./components/LocalizedText";
import OrganizationJsonLd from "./components/OrganizationJsonLd";

const solutions = [
  ["01", "Garden", "โซลูชันสำหรับสวน ทางเดิน และพื้นที่รอบบ้าน", "/images/garden.jpg"],
  ["02", "Cactus Farm", "พื้นที่ปลูกแคคตัส โรงเพาะ และระบบจัดวางที่เป็นระเบียบ", "/images/cactus-farm.jpg"],
  ["03", "Greenhouse", "พื้น โรงเรือน ระบบระบายน้ำ และพื้นที่ทำงานสำหรับการปลูก", "/images/greenhouse-solution.jpg"],
  ["04", "Farm & Utility", "งานฟาร์ม ทางเดิน พื้นที่เปียก และงานอเนกประสงค์", "/images/farm-utility.jpg"],
];

const benefits = [
  ["Durable for Real Use", "ทนทาน ใช้งานได้จริงในระยะยาว"],
  ["Easy Installation", "ติดตั้งง่าย และปรับพื้นที่ได้สะดวก"],
  ["UV & Weather Resistant", "เหมาะกับพื้นที่กลางแจ้ง แดด และฝน"],
  ["Modular Design", "ต่อขยายและจัดรูปแบบพื้นที่ได้ยืดหยุ่น"],
  ["Made in Thailand", "ออกแบบและผลิตในประเทศไทย"],
];

const spaces = [
  ["Cactus Bench System", "ระบบโต๊ะปลูกสำหรับฟาร์มแคคตัส ที่จัดพื้นที่ให้เป็นระเบียบ ดูแลง่าย และใช้งานได้จริง", "/images/featured-cactus-bench-system.jpg"],
  ["Greenhouse Walkway", "พื้นที่ใช้งานในโรงเรือนที่สะอาด เป็นระเบียบ และเหมาะกับการดูแลในทุกวัน", "/images/featured-greenhouse-walkway.jpg"],
  ["Farm Floor Application", "โซลูชันพื้นสำหรับฟาร์ม ทางเดิน พื้นที่เปียก และงานอเนกประสงค์", "/images/featured-farm-floor-application.jpg"],
];

const productSystems = [
  ["01", "Flooring System", "6 Models", "แผ่นปูพื้นพลาสติกแบบโมดูลาร์สำหรับสวน โรงเรือน ฟาร์ม ทางเดิน พื้นที่เปียก และงานอเนกประสงค์ มีทั้งหมด 6 รุ่น เพื่อให้เลือกตามพื้นที่และลักษณะการใช้งาน", "/images/system-flooring.jpg", "/flooring-system"],
  ["02", "Growing Bench System", "1.5 × 1.0 M", "โต๊ะวางปลูกต้นไม้สำหรับโรงเรือน ฟาร์มแคคตัส และพื้นที่เพาะปลูก ออกแบบให้ใช้งานง่าย จัดกระถางเป็นระเบียบ และใช้งานร่วมกับแผ่นปูพื้นด้านบนได้", "/images/system-bench.jpg", "/growing-bench-system"],
  ["03", "Plant Rack System", "Multiple Sizes", "ชั้นวางกระถางต้นไม้โครงเหล็กกล่อง มีหลายขนาด เช่น 30×100×30, 30×100×60 และ 30×100×90 ซม. รวมถึงสามารถพัฒนาขนาดอื่นตามพื้นที่จริง", "/images/system-rack.jpg", "/plant-rack-system"],
  ["04", "Modular Greenhouse System", "Made to Fit", "โรงเรือนสำเร็จรูปโครงเหล็กกล่อง ออกแบบเป็นโมดูลตามขนาดพื้นที่จริง สามารถถอดประกอบ ปรับขยาย หรือจัดรูปแบบใหม่ได้", "/images/system-greenhouse.jpg", "/modular-greenhouse-system"],
];

const factoryGallery = [
  ["Plastic Production", "/images/factory-plastic-production.jpg"],
  ["Steel Fabrication", "/images/factory-steel-fabrication.jpg"],
  ["Assembly / Finishing", "/images/factory-assembly-finishing.jpg"],
  ["Finished Products", "/images/factory-finished-products.jpg"],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <style>{`#products article > div:last-child > div > p:last-child, #about > div > div:first-child > p:nth-of-type(2), #contact > div > div:last-child > p:last-of-type { font-size: 17px; line-height: 1.7; }`}</style>
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
            <a href="#solutions"><LocalizedText th="โซลูชัน" en="Solutions" /></a>
            <a href="#spaces"><LocalizedText th="พื้นที่ใช้งาน" en="Spaces" /></a>
            <a href="#products"><LocalizedText th="สินค้า" en="Products" /></a>
            <a href="#about"><LocalizedText th="เกี่ยวกับเรา" en="About" /></a>
            <a href="#contact" className="rounded-full bg-[#476A55] px-5 py-2.5 text-white"><LocalizedText th="ติดต่อเรา" en="Contact" /></a>
          </nav>
          <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#26352C]/10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dce8dd_0%,transparent_34%),radial-gradient(circle_at_bottom_left,#eef3e7_0%,transparent_30%)]" /><div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.69fr_1.31fr] lg:items-center lg:px-10 lg:py-24"><div><p className="text-[11px] uppercase tracking-[0.28em] text-[#5C7A66]">Modern Growing Spaces</p><h1 className="mt-6 text-5xl font-semibold leading-[0.91] tracking-[-0.055em] sm:text-6xl lg:text-[74px]">Better spaces<br />for growing.</h1><p className="mt-7 max-w-xl text-base leading-8 text-[#68766C]">ออกแบบพื้นที่สำหรับสวน ฟาร์ม โรงเรือน และพื้นที่ปลูก<br />ให้ใช้งานง่าย เป็นระเบียบ สะอาด และเหมาะกับการใช้งานจริง</p><p className="mt-8 max-w-md border-l-2 border-[#476A55]/40 pl-4 text-base font-semibold leading-7 tracking-[0.025em] text-[#476A55]">Built for Farms. Designed for Better Spaces.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#solutions" className="rounded-full bg-[#476A55] px-6 py-3.5 text-sm font-medium text-white">Explore Solutions <Arrow /></a><a href="#spaces" className="rounded-full border border-[#476A55]/30 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#476A55]">View Spaces <Arrow /></a></div><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#6E7D72]"><span>Real use</span><span>Made in Thailand</span><span>Outdoor Ready</span></div></div><div className="relative overflow-hidden rounded-[30px] bg-[#DDE8DF] shadow-[0_35px_90px_rgba(54,82,64,0.16)] lg:-mr-14"><div className="aspect-[1.02/1] sm:aspect-[1.12/1]"><img src="/images/hero-greenhouse.jpg" alt="Cactus and greenhouse growing environment by The Little Tree" className="h-full w-full object-cover" /></div><div className="absolute left-5 top-5 rounded-full border border-white/45 bg-[#304539]/75 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">Garden · Farm · Greenhouse</div><div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-white/45 bg-white/80 p-5 backdrop-blur-md"><p className="text-[11px] uppercase tracking-[0.22em] text-[#6B7F70]">Growing Environment</p><p className="mt-2 text-xl font-semibold">Designed around how growers really work.</p></div></div></div></section>

      <section id="solutions" className="border-t border-[#26352C]/10"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">What We Solve</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Built for real growing spaces.</h2><p className="mt-5 max-w-xl text-base leading-8 text-[#68766C]">เราไม่ได้มองแค่สินค้าเป็นชิ้น ๆ แต่คิดเป็นระบบให้พื้นที่ทำงานได้ดีขึ้นจริง</p></div><p className="max-w-xs text-sm leading-7 text-[#68766C]">From the garden edge to the professional greenhouse, every space has its own rhythm.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{solutions.map(([no, title, desc, image]) => <article key={title} className="group overflow-hidden rounded-[26px] border border-[#26352C]/[0.06] bg-white"><div className="aspect-[4/3] overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><div className="p-6"><p className="text-xs tracking-[0.2em] text-[#8A9B8E]">{no}</p><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-[17px] leading-[1.7] text-[#66756A]">{desc}</p></div></article>)}</div></div></section>

      <section className="border-y border-[#26352C]/10 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-[#26352C]/10 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0 lg:px-10">{benefits.map(([title, desc]) => <div key={title} className="px-4 py-7 lg:px-5"><h2 className="text-[15px] font-semibold">{title}</h2><p className="mt-2 text-[15px] leading-[1.7] text-[#758077]">{desc}</p></div>)}</div></section>

      <section id="spaces" className="bg-[#F1F3ED] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Featured Spaces</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Spaces designed to work better.</h2><div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]"><article className="group overflow-hidden rounded-[28px] bg-white lg:row-span-2"><div className="relative min-h-[510px] lg:min-h-[630px]"><img src={spaces[0][2]} alt={spaces[0][0]} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#26352C]/80 to-transparent p-7 pt-28 text-white"><h3 className="text-3xl font-semibold">{spaces[0][0]}</h3><p className="mt-2 max-w-md text-sm leading-6 text-white/80">{spaces[0][1]}</p></div></div></article>{spaces.slice(1).map(([title, desc, image]) => <article key={title} className="group grid grid-cols-[0.85fr_1.15fr] overflow-hidden rounded-[24px] bg-white"><div className="min-h-[200px] overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><div className="flex flex-col justify-center p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#68766C]">{desc}</p></div></article>)}</div></div></section>

      <section id="products" className="bg-[#F7F6F1] py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Product Systems</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">From the floor<br />to the entire growing space.</h2></div><p className="max-w-md text-sm leading-7 text-[#68766C]">พื้น โต๊ะปลูก ชั้นวางกระถาง และโรงเรือน ถูกพัฒนาให้ทำงานร่วมกันเป็นระบบเดียว</p></div><div className="mt-14 space-y-10">{productSystems.map(([no, title, badge, desc, image, href], index) => <article key={title} className={`${index === 0 ? "block" : "grid lg:min-h-[360px] lg:grid-cols-2 lg:grid-rows-[360px] shadow-[0_18px_40px_rgba(54,82,64,0.07)]"} overflow-hidden rounded-[30px] border border-[#26352C]/[0.06] bg-white ${index === 0 ? "lg:scale-[1.08] lg:origin-left lg:shadow-[0_28px_70px_rgba(54,82,64,0.14)]" : ""}`}><div className={index % 2 === 1 ? "lg:order-2" : ""}><div className={`${index === 0 ? "aspect-[16/9]" : "h-full"} bg-[#DDE8DF]`}><img src={image} alt={title} className={`h-full w-full ${index === 0 ? "object-contain" : "object-contain"}`} /></div></div><div className={`flex flex-col justify-between ${index === 0 ? "p-10 lg:p-12" : "p-8 lg:p-9"} ${index % 2 === 1 ? "lg:order-1" : ""}`}><div><div className={`flex items-center justify-between ${index === 0 ? "" : "gap-4"}`}><div className="flex items-center gap-3"><p className="text-xs tracking-[0.22em] text-[#8A9B8E]">SYSTEM {no}</p>{index === 0 && <span className="rounded-full border border-[#476A55]/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#476A55]">Main System</span>}</div><span className={`${index === 0 ? "" : "shrink-0"} rounded-full bg-[#EEF3EB] px-4 py-2 text-xs text-[#5D765F]`}>{badge}</span></div><h3 className={`${index === 0 ? "mt-6" : "mt-5"} text-3xl font-semibold tracking-[-0.03em] lg:text-4xl`}>{title}</h3><p className={`${index === 0 ? "mt-5" : "mt-4"} text-base leading-8 text-[#68766C]`}>{desc}</p></div><a href={href} className={`${index === 0 ? "mt-10" : "mt-8"} inline-flex w-fit items-center gap-3 border-b border-[#476A55]/30 pb-1 text-sm text-[#476A55]`}>View System <Arrow /></a></div></article>)}</div></div></section>

      <section id="about" className="bg-[#304539] text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10 lg:py-32"><div><p className="text-xs uppercase tracking-[0.24em] text-[#B9C7BC]">Designed & Manufactured in Thailand</p><h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] lg:text-5xl">From real problems<br />to practical products.</h2><p className="mt-6 max-w-lg text-base leading-8 text-[#CAD3CB]">The Little Tree พัฒนาสินค้าจากการใช้งานจริง ตั้งแต่การออกแบบ การผลิต ไปจนถึงการทดสอบ เพื่อให้ทุกระบบเหมาะกับพื้นที่จริง</p><p className="mt-8 border-l border-[#B9C7BC]/40 pl-4 text-sm font-medium leading-7 tracking-[0.03em] text-[#DDE8DF]">Farm & Solutions for Better Spaces.</p></div><div id="projects" className="grid grid-cols-2 gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-2">{factoryGallery.map(([title, image], index) => <div key={title} className={`group ${index === 0 ? "lg:row-span-2" : ""}`}><div className={`h-full min-h-[150px] overflow-hidden rounded-[22px] bg-[#3A5042] ${index === 0 ? "lg:min-h-[430px]" : ""}`}><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div><p className="mt-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#B9C7BC]">{title}</p></div>)}</div></div></section>

      <section id="contact" className="bg-[#E9EEE8]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-20"><div><p className="text-xs uppercase tracking-[0.24em] text-[#64806C]">Start a Project</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Have a space<br />you want to improve?</h2><p className="mt-6 max-w-xl text-base leading-8 text-[#68766C]">ส่งรูปพื้นที่ ขนาด หรือรายละเอียดการใช้งานมาให้เรา เพื่อช่วยแนะนำสินค้าและ Solution ที่เหมาะกับพื้นที่ของคุณ</p></div><div className="rounded-[24px] border border-[#476A55]/15 bg-white/60 p-6 shadow-[0_16px_40px_rgba(54,82,64,0.06)] lg:p-8"><p className="text-xs uppercase tracking-[0.18em] text-[#64806C]">A thoughtful next step</p><p className="mt-3 text-sm leading-7 text-[#68766C]">เริ่มจากพื้นที่จริง แล้วค่อยเลือกแนวทางที่เหมาะกับการใช้งาน</p><div className="mt-6 flex flex-wrap items-center gap-4"><a href="https://lin.ee/SOfDUCYl" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 rounded-full bg-[#476A55] px-7 py-4 text-sm font-medium text-white">Chat via LINE <Arrow /></a><a href="https://www.facebook.com/TheLittletree.th" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 rounded-full border border-[#476A55]/20 bg-white px-5 py-3 text-sm font-medium text-[#476A55]">Facebook</a><a href="tel:0971922616" className="inline-flex items-center gap-4 rounded-full border border-[#476A55]/20 bg-white px-5 py-3 text-sm font-medium text-[#476A55]">Call 097-192-2616</a></div></div></div></section>

      <footer className="border-t border-[#26352C]/10 bg-[#F7F6F1]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 md:flex-row md:items-end lg:px-10"><div><a href="/" aria-label="The Little Tree home" className="flex items-center gap-3"><img src="/images/little-tree-icon.png" alt="" className="h-[36px] w-auto object-contain" /><span><span className="block text-lg font-semibold tracking-[0.16em] text-[#26352C]">THE LITTLE TREE</span><span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-[#5C7A66]">Garden & Farm Solutions</span></span></a></div><div className="text-sm leading-7 text-[#68766C] md:text-right">Growing Better Spaces<br /><span className="text-[#8A948C]">For a Greener Tomorrow · Made in Thailand</span></div></div></footer>
    </main>
    </>
  );
}
