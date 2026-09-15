/**
 * Uwi_Dev i18n — the dictionary IS the i18n layer.
 * No next-intl, no context, no cookies. Server components read `t(locale)`,
 * client components receive `locale` as a prop from their server parents.
 */

export type Locale = "en" | "id";

export const locales: Locale[] = ["en", "id"];

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "id";
}

const translations = {
  en: {
    meta: {
      title: "Uwi_Dev — Software built around your business",
      description:
        "Custom business systems, web applications, mobile apps, and integrations built around the way your company actually works.",
    },
    common: {
      skipToContent: "Skip to content",
      changeLanguage: "Change language",
      chatWhatsApp: "Chat with Uwi_Dev on WhatsApp",
    },
    nav: {
      primary: "Primary",
      mobile: "Mobile",
      footer: "Footer",
      links: [
        { label: "What we build", href: "#what-we-build" },
        { label: "How we work", href: "#how-we-work" },
        { label: "Work", href: "#work" },
        { label: "Pricing", href: "#pricing" },
        { label: "About", href: "#about" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
      ],
      contactUs: "Contact us",
      menu: "Menu",
    },
    footer: {
      studio: "Uwi_Dev Studio",
      copyright: "Small by design. Serious about engineering.",
    },
    hero: {
      eyebrowChips: ["Founder-led engineering", "Based in Indonesia"],
      headline: {
        line1: "Software built around",
        line2: " your business.",
      },
      sub: "We build custom business systems, web applications, mobile apps, and integrations around the way your company actually works.",
      cta: "Contact us",
      supporting:
        "Have a business problem software could solve? Let's talk.",
      capabilities: [
        "Custom Business Systems",
        "API Integrations",
        "Web & Mobile Platforms",
        "Business Automation",
      ],
    },
    problem: {
      eyebrow: "The problem",
      title:
        "Your business isn't generic. Your software shouldn't be either.",
      body: "Growing companies eventually hit a ceiling where off-the-shelf software forces convoluted workarounds, broken spreadsheets, and dozens of manual copy-paste routines.",
      transformations: [
        {
          number: "01",
          title: "Manual → Automated",
          description:
            "Repetitive operational work — tangled spreadsheets, paper records, manual entry across three systems — becomes one automated flow.",
        },
        {
          number: "02",
          title: "Disconnected → Connected",
          description:
            "Inventory trackers, customer channels, and sales tools stop living in silos and start sharing one source of operational truth.",
        },
        {
          number: "03",
          title: "Generic → Custom",
          description:
            "Software built around your actual workflow — not a template your business has to reshape itself to fit.",
        },
      ],
    },
    services: {
      eyebrow: "Capabilities",
      title: "What we build",
      sub: "Software that fits the way your business actually operates — engineered from the ground up for stability and longevity.",
      items: [
        {
          number: "01",
          code: "Marketing sites",
          title: "Landing pages",
          description:
            "High-converting landing pages and marketing sites — fast, responsive, and built to turn visitors into enquiries.",
          tags: ["Landing pages", "SEO", "Analytics"],
        },
        {
          number: "02",
          code: "Corporate sites",
          title: "Company profiles",
          description:
            "Digital company profiles and corporate websites that present your business credibly — structured, fast, and tailored to your audience.",
          tags: ["Corporate websites", "Multilingual", "Brand-aligned"],
        },
        {
          number: "03",
          code: "Primary core",
          title: "Business systems",
          description:
            "Inventory management, sales tracking, reporting, HR and operational systems — built around how your operation actually runs.",
          tags: ["Inventory", "Sales", "Reporting", "HR & ops"],
        },
        {
          number: "04",
          code: "Interfaces",
          title: "Web applications",
          description:
            "Workflow-specific web apps for your exact process — client portals, admin dashboards, and internal control panels.",
          tags: ["Client portals", "Admin dashboards", "B2B portals"],
        },
        {
          number: "05",
          code: "Field tools",
          title: "Mobile applications",
          description:
            "Apps for customers, employees, and field teams — light enough to run on a phone, reliable enough to depend on.",
          tags: ["Customer apps", "Field teams", "Offline sync"],
        },
        {
          number: "06",
          code: "Ecosystem",
          title: "System integrations",
          description:
            "Connecting the tools you already use — APIs, payment gateways, WhatsApp, ERP systems, and internal platforms.",
          tags: ["APIs", "Payment gateways", "WhatsApp", "ERP"],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "You bring the problem. We figure out the software.",
      sub: "A predictable, transparent methodology from first conversation to production deployment.",
      steps: [
        {
          number: "01",
          label: "Discovery",
          title: "Map the friction",
          description:
            "We audit your daily operations, talk to the people running them, and document where time, stock, or money gets trapped.",
        },
        {
          number: "02",
          label: "Architecture",
          title: "System design",
          description:
            "Data model, service boundaries, and a plan for how the pieces fit — agreed before we write code.",
        },
        {
          number: "03",
          label: "Development",
          title: "Build in the open",
          description:
            "Modular builds with regular staging releases, so you inspect working software as it grows.",
        },
        {
          number: "04",
          label: "Deployment",
          title: "Go live, carefully",
          description:
            "Data migration, staff onboarding, and a cutover that doesn't stop your business.",
        },
        {
          number: "05",
          label: "Ongoing engineering",
          title: "Keep it healthy",
          description:
            "The system evolves as your business scales — we stay involved after launch.",
        },
      ],
      note: "You talk to the engineers building your system — no account-manager relay.",
    },
    work: {
      eyebrow: "Work",
      title: "Selected work",
      sub: "A selection of products and systems we've built — from digital products to internal business software.",
      cta: "Have a problem worth solving? Let's talk",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Fixed quotes, starting from $200.",
      sub: "Every project ships as one defined scope with a fixed price — you know the number before we start.",
      intro:
        "Prices below are starting points. Pick a product to see its tiers. Every project gets a single fixed quote after a short scoping call.",
      pickLabel: "Pick a product",
      fromLabel: "from",
      warrantyLabel: "Maintenance warranty",
      warrantyNote:
        "Every tier includes a maintenance warranty — free bug fixes and small changes for the duration listed.",
      tiers: [
        {
          name: "Basic",
          tagline:
            "A focused build that solves one need. Fast to ship and easy to manage — the clean way to get started.",
          warranty: "1 month",
        },
        {
          name: "Professional",
          tagline:
            "A complete custom system built around your workflow — data, reporting, and automation working as one. The tier most businesses choose.",
          warranty: "3 months",
        },
        {
          name: "Enterprise",
          tagline:
            "One connected platform — web, mobile, and integrations working together. Built for teams that rely on it daily.",
          warranty: "6 months",
        },
      ],
      services: [
        {
          id: "landing",
          code: "01",
          label: "Landing page",
          tiers: [
            { price: "$200" },
            { price: "$400" },
            { price: "$800", note: "+CMS" },
          ],
        },
        {
          id: "company-profile",
          code: "02",
          label: "Company profile",
          tiers: [
            { price: "$400" },
            { price: "$800" },
            { price: "$1.5k", note: "+CMS, multilingual" },
          ],
        },
        {
          id: "ecommerce",
          code: "03",
          label: "E-commerce",
          tiers: [
            { price: "$1k" },
            { price: "$2k" },
            { price: "$4k", note: "web + mobile" },
          ],
        },
        {
          id: "pos",
          code: "04",
          label: "POS system",
          tiers: [
            { price: "$1.5k" },
            { price: "$3k" },
            { price: "$6k", note: "POS + mobile ordering" },
          ],
        },
        {
          id: "business-system",
          code: "05",
          label: "Business system",
          tiers: [
            { price: "$1.5k" },
            { price: "$3k" },
            { price: "$7k", note: "web + field-team mobile" },
          ],
        },
        {
          id: "web-app",
          code: "06",
          label: "Web app / portal",
          tiers: [{ price: "$2k" }, { price: "$4k" }, { price: "$8k" }],
        },
        {
          id: "mobile-app",
          code: "07",
          label: "Mobile app",
          tiers: [{ price: "$2.5k" }, { price: "$5k" }, { price: "$10k" }],
        },
        {
          id: "integration",
          code: "08",
          label: "System integration",
          tiers: [
            { price: "$800" },
            { price: "$1.5k" },
            { price: "$3k", note: "CMS & app integration" },
          ],
        },
      ],
      unsure:
        "Not sure what you need? Tell us the problem — we'll scope it, then you get a fixed price.",
      cta: "Get a fixed quote",
    },
    industries: {
      eyebrow: "Who we work with",
      title: "Built for businesses with real problems to solve.",
      sub: "We partner best with owner-operators and growing founders who have outgrown simple software tools.",
      items: [
        {
          name: "Cafés & restaurants",
          description:
            "Recipe-level inventory, multi-outlet ordering, procurement.",
        },
        {
          name: "Retail & commerce",
          description: "Stock across channels, sales tracking, returns workflows.",
        },
        {
          name: "Logistics & fleet",
          description: "Route dispatch, driver tracking, proof of delivery.",
        },
        {
          name: "Professional services",
          description: "Client portals, billing milestones, collaboration.",
        },
        {
          name: "High-growth startups",
          description: "Custom MVPs, scalable backends, working systems fast.",
        },
      ],
      note: "Don't see your specific industry? The foundational architecture stays the same.",
      cta: "Have a different problem? Let's talk",
    },
    about: {
      eyebrow: "Ethos",
      title: {
        line1: "Small by design.",
        line2: "Serious about engineering.",
      },
      paragraphs: [
        "Uwi_Dev is a small, founder-led software studio. There are no layers of account managers and no handoffs to junior contractors — the engineers who scope your system are the engineers who build it.",
        "You talk directly to the people writing the code. We stay close to your stakeholders, and we measure success by the operational efficiency you actually gain.",
      ],
      facts: [
        { value: "Fixed", label: "project pricing" },
        { value: "Direct", label: "engineer access" },
        { value: "Yours", label: "code ownership" },
      ],
      quote:
        "“The most elegant piece of software is one that quietly removes five hours of daily operational friction, so a business can focus on serving its customers instead of wrestling with technology.”",
      caption: "Uwi_Dev — Lead Architect",
      captionSub: "Founder-led studio",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say",
      sub: "Real quotes from real projects.",
      prev: "Previous testimonial",
      next: "Next testimonial",
      tablist: "Testimonials",
      goToSlide: "Go to slide {n}",
      quotes: [
        {
          quote:
            "They understood our operations before writing a single line of code. The system fits exactly how we work.",
          attribution: "Operations Lead — Retail Business",
        },
        {
          quote:
            "We went from spreadsheets everywhere to one platform that actually tracks everything. Night and day difference.",
          attribution: "Founder — Logistics Startup",
        },
        {
          quote:
            "Direct access to the engineer who built our system. No middlemen, no runaround. That alone is worth it.",
          attribution: "Director — Professional Services",
        },
        {
          quote:
            "They didn't just build software — they mapped our entire workflow and removed friction we didn't know we had.",
          attribution: "Owner — Café Chain",
        },
        {
          quote:
            "Fast, clear communication throughout. We saw working software every two weeks, not after three months of silence.",
          attribution: "CTO — SaaS Startup",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what is slowing your business down.",
      sub: "We'll figure out what software can do about it.",
      expectations: [
        "A reply within a day or two",
        "A short conversation about the problem, not a sales pitch",
        "A fixed project price before we start",
      ],
      whatsapp: "WhatsApp — usually the fastest",
    },
    contactForm: {
      title: "Project brief",
      name: "Name",
      email: "Email",
      company: "Company",
      optional: "(optional)",
      message: "What are you trying to build?",
      budget: "Budget",
      timeline: "Timeline",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Your company",
      messagePlaceholder:
        "Describe the problem you're trying to solve — the more operational detail, the better.",
      budgetOptions: [
        "Not sure yet",
        "Under Rp10 million",
        "Rp10–50 million",
        "Rp50 million+",
      ],
      timelineOptions: [
        "Just exploring",
        "Within a month",
        "1–3 months",
        "As soon as possible",
      ],
      submit: "Let's talk",
      hint: "Opens your email app with the details prefilled.",
      emailSubject: "Project inquiry",
      emailBodyName: "Name",
      emailBodyEmail: "Email",
      emailBodyCompany: "Company",
      emailBodyMessage: "What are you trying to build?",
      emailBodyBudget: "Budget",
      emailBodyTimeline: "Timeline",
    },
  },
  id: {
    meta: {
      title: "Uwi_Dev — Perangkat lunak seputar bisnis Anda",
      description:
        "Sistem bisnis custom, aplikasi web, aplikasi mobile, dan integrasi yang dibangun seputar cara perusahaan Anda benar-benar bekerja.",
    },
    common: {
      skipToContent: "Langsung ke konten",
      changeLanguage: "Ganti bahasa",
      chatWhatsApp: "Chat dengan Uwi_Dev di WhatsApp",
    },
    nav: {
      primary: "Utama",
      mobile: "Seluler",
      footer: "Footer",
      links: [
        { label: "Yang kami bangun", href: "#what-we-build" },
        { label: "Cara kami bekerja", href: "#how-we-work" },
        { label: "Karya", href: "#work" },
        { label: "Harga", href: "#pricing" },
        { label: "Tentang", href: "#about" },
        { label: "Testimoni", href: "#testimonials" },
        { label: "Kontak", href: "#contact" },
      ],
      contactUs: "Hubungi kami",
      menu: "Menu",
    },
    footer: {
      studio: "Uwi_Dev Studio",
      copyright: "Kecil oleh desain, serius dalam engineering.",
    },
    hero: {
      eyebrowChips: ["Rekayasa dipimpin founder", "Berbasis di Indonesia"],
      headline: {
        line1: "Software Tepat",
        line2: " Bisnis Melesat.",
      },
      sub: "Kami membangun sistem bisnis custom, aplikasi web, aplikasi mobile, dan integrasi seputar cara perusahaan Anda benar-benar bekerja.",
      cta: "Hubungi kami",
      supporting:
        "Ada masalah bisnis yang bisa dipecahkan software? Mari bicara.",
      capabilities: [
        "Sistem Bisnis Custom",
        "Integrasi API",
        "Platform Web & Mobile",
        "Otomasi Bisnis",
      ],
    },
    problem: {
      eyebrow: "Masalahnya",
      title:
        "Bisnis Anda tidak generik. Software Anda pun seharusnya tidak.",
      body: "Perusahaan yang sedang bertumbuh akhirnya menabrak dinding: software jadi-jadian memaksa cara kerja berbelit, spreadsheet berantakan, dan puluhan rutinitas copy-paste manual.",
      transformations: [
        {
          number: "01",
          title: "Manual → Otomatis",
          description:
            "Pekerjaan operasional yang berulang — spreadsheet kusut, catatan kertas, input manual di tiga sistem — menjadi satu alur otomatis.",
        },
        {
          number: "02",
          title: "Terpisah → Terhubung",
          description:
            "Pencatat stok, kanal pelanggan, dan alat penjualan tidak lagi hidup sendiri-sendiri — semuanya berbagi satu sumber kebenaran operasional.",
        },
        {
          number: "03",
          title: "Generik → Custom",
          description:
            "Software yang dibangun seputar alur kerja Anda yang sebenarnya — bukan template yang harus dibengkokkan oleh bisnis Anda.",
        },
      ],
    },
    services: {
      eyebrow: "Kapabilitas",
      title: "Yang kami bangun",
      sub: "Software yang pas dengan cara bisnis Anda beroperasi — direkayasa dari nol untuk stabilitas dan umur panjang.",
      items: [
        {
          number: "01",
          code: "Situs pemasaran",
          title: "Landing page",
          description:
            "Landing page dan situs pemasaran dengan konversi tinggi — cepat, responsif, dan dibuat untuk mengubah pengunjung menjadi pertanyaan.",
          tags: ["Landing page", "SEO", "Analytics"],
        },
        {
          number: "02",
          code: "Situs korporat",
          title: "Profil perusahaan",
          description:
            "Profil perusahaan digital dan situs korporat yang menghadirkan bisnis Anda secara kredibel — terstruktur, cepat, dan disesuaikan dengan audiens Anda.",
          tags: ["Situs perusahaan", "Multibahasa", "Selaras brand"],
        },
        {
          number: "03",
          code: "Inti utama",
          title: "Sistem bisnis",
          description:
            "Manajemen inventori, pelacakan penjualan, pelaporan, HR, dan sistem operasional — dibangun seputar cara operasional Anda berjalan.",
          tags: ["Inventori", "Penjualan", "Pelaporan", "HR & operasional"],
        },
        {
          number: "04",
          code: "Antarmuka",
          title: "Aplikasi web",
          description:
            "Aplikasi web yang spesifik untuk alur kerja Anda — portal klien, dashboard admin, dan panel kontrol internal.",
          tags: ["Portal klien", "Dashboard admin", "Portal B2B"],
        },
        {
          number: "05",
          code: "Alat lapangan",
          title: "Aplikasi mobile",
          description:
            "Aplikasi untuk pelanggan, karyawan, dan tim lapangan — ringan untuk dijalankan di ponsel, andal untuk diandalkan.",
          tags: ["Aplikasi pelanggan", "Tim lapangan", "Sinkronisasi offline"],
        },
        {
          number: "06",
          code: "Ekosistem",
          title: "Integrasi sistem",
          description:
            "Menghubungkan alat yang sudah Anda pakai — API, payment gateway, WhatsApp, sistem ERP, dan platform internal.",
          tags: ["API", "Payment gateway", "WhatsApp", "ERP"],
        },
      ],
    },
    process: {
      eyebrow: "Proses",
      title: "Anda bawa masalahnya. Kami yang urus software-nya.",
      sub: "Metodologi yang jelas dan transparan, dari percakapan pertama sampai deployment produksi.",
      steps: [
        {
          number: "01",
          label: "Discovery",
          title: "Petakan hambatannya",
          description:
            "Kami audit operasional harian Anda, ngobrol dengan orang-orang yang menjalankannya, dan mendokumentasikan di mana waktu, stok, atau uang tersangkut.",
        },
        {
          number: "02",
          label: "Arsitektur",
          title: "Desain sistem",
          description:
            "Model data, batas antar layanan, dan rencana bagaimana semua bagian menyatu — disepakati sebelum kami menulis kode.",
        },
        {
          number: "03",
          label: "Pengembangan",
          title: "Bangun secara terbuka",
          description:
            "Pengembangan modular dengan rilis staging berkala, sehingga Anda bisa memeriksa software yang berjalan saat ia tumbuh.",
        },
        {
          number: "04",
          label: "Deployment",
          title: "Go live, dengan hati-hati",
          description:
            "Migrasi data, onboarding staf, dan cutover yang tidak menghentikan bisnis Anda.",
        },
        {
          number: "05",
          label: "Engineering berkelanjutan",
          title: "Jaga tetap sehat",
          description:
            "Sistem terus berkembang mengikuti skala bisnis Anda — kami tetap terlibat setelah peluncuran.",
        },
      ],
      note: "Anda berbicara langsung dengan engineer yang membangun sistem Anda — tanpa perantara account manager.",
    },
    work: {
      eyebrow: "Karya",
      title: "Karya pilihan",
      sub: "Pilihan produk dan sistem yang pernah kami bangun — dari produk digital sampai software bisnis internal.",
      cta: "Punya masalah yang layak dipecahkan? Mari bicara",
    },
    pricing: {
      eyebrow: "Harga",
      title: "Harga tetap, mulai dari Rp1,5 juta.",
      sub: "Setiap proyek dikerjakan dalam satu lingkup yang jelas dengan harga tetap — Anda tahu angkanya sebelum kami mulai.",
      intro:
        "Harga di bawah adalah titik awal. Pilih produk untuk melihat tiap tingkatannya. Setiap proyek mendapat satu penawaran tetap setelah percakapan singkat.",
      pickLabel: "Pilih produk",
      fromLabel: "mulai dari",
      warrantyLabel: "Garansi pemeliharaan",
      warrantyNote:
        "Setiap tier sudah termasuk garansi pemeliharaan — perbaikan bug dan perubahan kecil gratis selama periode tertera.",
      tiers: [
        {
          name: "Basic",
          tagline:
            "Solusi fokus yang memecahkan satu kebutuhan. Cepat jadi dan mudah diurus — cara paling bersih untuk memulai.",
          warranty: "1 bulan",
        },
        {
          name: "Professional",
          tagline:
            "Sistem custom lengkap yang dibangun mengikuti alur kerja Anda — data, laporan, dan otomasi jadi satu. Paling banyak dipilih bisnis.",
          warranty: "3 bulan",
        },
        {
          name: "Enterprise",
          tagline:
            "Satu platform yang terhubung — web, mobile, dan integrasi bekerja bersama. Dibangun untuk tim yang mengandalkannya setiap hari.",
          warranty: "6 bulan",
        },
      ],
      services: [
        {
          id: "landing",
          code: "01",
          label: "Landing page",
          tiers: [
            { price: "Rp1,5jt" },
            { price: "Rp2,5jt" },
            { price: "Rp4,5jt", note: "+CMS" },
          ],
        },
        {
          id: "company-profile",
          code: "02",
          label: "Profil perusahaan",
          tiers: [
            { price: "Rp3,5jt" },
            { price: "Rp6jt" },
            { price: "Rp12jt", note: "+CMS, multibahasa" },
          ],
        },
        {
          id: "ecommerce",
          code: "03",
          label: "E-commerce",
          tiers: [
            { price: "Rp8jt" },
            { price: "Rp15jt" },
            { price: "Rp30jt", note: "web + mobile" },
          ],
        },
        {
          id: "pos",
          code: "04",
          label: "Sistem POS",
          tiers: [
            { price: "Rp10jt" },
            { price: "Rp18jt" },
            { price: "Rp35jt", note: "POS + pemesanan mobile" },
          ],
        },
        {
          id: "business-system",
          code: "05",
          label: "Sistem bisnis",
          tiers: [
            { price: "Rp12jt" },
            { price: "Rp22jt" },
            { price: "Rp45jt", note: "web + mobile lapangan" },
          ],
        },
        {
          id: "web-app",
          code: "06",
          label: "Aplikasi web / portal",
          tiers: [{ price: "Rp12jt" }, { price: "Rp25jt" }, { price: "Rp50jt" }],
        },
        {
          id: "mobile-app",
          code: "07",
          label: "Aplikasi mobile",
          tiers: [{ price: "Rp15jt" }, { price: "Rp30jt" }, { price: "Rp60jt" }],
        },
        {
          id: "integration",
          code: "08",
          label: "Integrasi sistem",
          tiers: [
            { price: "Rp5jt" },
            { price: "Rp10jt" },
            { price: "Rp20jt", note: "+integrasi CMS & aplikasi" },
          ],
        },
      ],
      unsure:
        "Tidak yakin butuh apa? Ceritakan masalahnya — kami yang menyusun lingkupnya, lalu Anda dapat harga tetap.",
      cta: "Dapatkan penawaran tetap",
    },
    industries: {
      eyebrow: "Siapa yang kami layani",
      title: "Dibangun untuk bisnis dengan masalah nyata yang harus dipecahkan.",
      sub: "Kami paling cocok bekerja dengan owner-operator dan founder yang sedang bertumbuh — yang sudah melewati batas alat software sederhana.",
      items: [
        {
          name: "Kafe & restoran",
          description:
            "Inventori hingga level resep, pemesanan multi-cabang, pengadaan.",
        },
        {
          name: "Retail & commerce",
          description: "Stok lintas kanal, pelacakan penjualan, alur retur.",
        },
        {
          name: "Logistik & armada",
          description: "Penugasan rute, pelacakan sopir, bukti pengiriman.",
        },
        {
          name: "Jasa profesional",
          description: "Portal klien, milestone billing, kolaborasi.",
        },
        {
          name: "Startup bertumbuh cepat",
          description: "MVP custom, backend yang skalabel, sistem berjalan cepat.",
        },
      ],
      note: "Tidak melihat industri Anda di sini? Arsitektur dasarnya tetap sama.",
      cta: "Punya masalah yang berbeda? Mari bicara",
    },
    about: {
      eyebrow: "Etos",
      title: {
        line1: "Kecil karena desain.",
        line2: "Serius soal engineering.",
      },
      paragraphs: [
        "Uwi_Dev adalah studio software kecil yang dipimpin founder. Tidak ada lapisan account manager, tidak ada serah-terima ke kontraktor junior — engineer yang menyusun sistem Anda adalah engineer yang membangunnya.",
        "Anda berbicara langsung dengan orang-orang yang menulis kode. Kami dekat dengan pemangku kepentingan Anda, dan kami mengukur keberhasilan dari efisiensi operasional yang benar-benar Anda dapatkan.",
      ],
      facts: [
        { value: "Tetap", label: "harga proyek" },
        { value: "Langsung", label: "akses engineer" },
        { value: "Milik Anda", label: "kepemilikan kode" },
      ],
      quote:
        "“Software paling elegan adalah yang diam-diam menghapus lima jam gesekan operasional harian, sehingga bisnis bisa fokus melayani pelanggannya alih-alih berkelahi dengan teknologi.”",
      caption: "Uwi_Dev — Arsitek Utama",
      captionSub: "Studio dipimpin founder",
    },
    testimonials: {
      eyebrow: "Testimoni",
      title: "Kata klien",
      sub: "Kutipan asli dari proyek nyata.",
      prev: "Testimoni sebelumnya",
      next: "Testimoni berikutnya",
      tablist: "Testimoni",
      goToSlide: "Ke slide {n}",
      quotes: [
        {
          quote:
            "Mereka memahami operasional kami sebelum menulis satu baris kode pun. Sistemnya pas dengan cara kerja kami.",
          attribution: "Operations Lead — Bisnis Retail",
        },
        {
          quote:
            "Kami beralih dari spreadsheet di mana-mana ke satu platform yang benar-benar melacak semua hal. Perbedaan yang luar biasa.",
          attribution: "Founder — Startup Logistik",
        },
        {
          quote:
            "Akses langsung ke engineer yang membangun sistem kami. Tanpa perantara, tanpa bolak-balik. Itu sudah cukup berharga.",
          attribution: "Director — Jasa Profesional",
        },
        {
          quote:
            "Mereka tidak hanya membangun software — mereka memetakan seluruh alur kerja kami dan menghilangkan hambatan yang tidak kami sadari.",
          attribution: "Owner — Rantai Kafe",
        },
        {
          quote:
            "Komunikasi yang cepat dan jelas sepanjang proyek. Kami melihat software yang berjalan setiap dua minggu, bukan setelah tiga bulan diam.",
          attribution: "CTO — Startup SaaS",
        },
      ],
    },
    contact: {
      eyebrow: "Kontak",
      title: "Ceritakan apa yang memperlambat bisnis Anda.",
      sub: "Kami yang akan mencari tahu solusi software-nya.",
      expectations: [
        "Balasan dalam satu-dua hari",
        "Percakapan singkat tentang masalah Anda, bukan ajakan jualan",
        "Harga proyek tetap sebelum kami mulai",
      ],
      whatsapp: "WhatsApp — biasanya paling cepat",
    },
    contactForm: {
      title: "Ringkasan proyek",
      name: "Nama",
      email: "Email",
      company: "Perusahaan",
      optional: "(opsional)",
      message: "Apa yang ingin Anda bangun?",
      budget: "Anggaran",
      timeline: "Tenggat waktu",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "email@perusahaan.com",
      companyPlaceholder: "Nama perusahaan",
      messagePlaceholder:
        "Jelaskan masalah yang ingin Anda selesaikan — semakin detail operasionalnya, semakin baik.",
      budgetOptions: [
        "Belum yakin",
        "Di bawah Rp10 juta",
        "Rp10–50 juta",
        "Rp50 juta+",
      ],
      timelineOptions: [
        "Masih menjajaki",
        "Dalam sebulan",
        "1–3 bulan",
        "Sesegera mungkin",
      ],
      submit: "Mari bicara",
      hint: "Membuka aplikasi email Anda dengan detail yang sudah terisi.",
      emailSubject: "Pertanyaan proyek",
      emailBodyName: "Nama",
      emailBodyEmail: "Email",
      emailBodyCompany: "Perusahaan",
      emailBodyMessage: "Apa yang ingin Anda bangun?",
      emailBodyBudget: "Anggaran",
      emailBodyTimeline: "Tenggat",
    },
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}

export type Translation = (typeof translations)["en"];