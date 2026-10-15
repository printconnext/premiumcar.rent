/**
 * PREMIUMCAR.RENT - Main Application Logic
 * Features:
 * - Instant Bilingual (TH / EN) Language Switcher
 * - Interactive Luxury Rental Quote Calculator
 * - Real-time Line & WhatsApp Prefilled Message Generator
 * - Dynamic Fleet Showcase Switcher
 * - AEO / SEO Synchronized FAQ Accordion
 * - Sticky Header Scroll & Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHeader();
  initFleetTabs();
  initCalculator();
  initFaqAccordion();
  initContactForm();
  initHeroSearch();
});

/* ==========================================================================
   1. Bilingual Language Switcher (TH / EN)
   ========================================================================== */
const i18n = {
  th: {
    navFleet: "รุ่นรถ VIP",
    navPricing: "ตารางราคา",
    navChauffeur: "มาตรฐานคนขับ",
    navCorporate: "สัญญานิติบุคคล",
    navCalculator: "คำนวณราคา",
    navFaq: "คำถามพบบ่อย",
    navContact: "ติดต่อจอง",
    heroBadge1: "รถใหม่ไมล์น้อย ปี 2024-2026",
    heroBadge2: "คนขับผ่านการคัดกรอง 10 ขั้นตอน",
    heroBadge3: "หักภาษีนิติบุคคลได้ 36,000 บ./ด.",
    heroTitle: "บริการเช่ารถตู้ <span class='gold-text'>Toyota Alphard VIP</span> พร้อมคนขับมืออาชีพ",
    heroDesc: "ยกระดับการเดินทางระดับผู้บริหาร รับรองแขก VIP ท่องเที่ยว และเช่าระยะยาวสำหรับองค์กร ด้วยยนตรกรรมระดับพรีเมียม มาตรฐานสุขอนามัยและความสะอาดระดับเฟิร์สคลาส พร้อมคนขับที่ผ่านการตรวจสอบประวัติอาชญากรรม 100%",
    btnBookNow: "จองรถทันทีผ่าน LINE",
    btnCallNow: "<span>📞&nbsp;โทร&nbsp;063&#8209;535&#8209;9954</span>",
    btnCalculate: "ประเมินราคาทันที",
    fleetTag: "Exclusive VIP Fleet",
    fleetHeading: "กองทัพรถหรู <span class='gold-text'>Toyota Alphard & Vellfire</span> พร้อมให้บริการ",
    fleetSub: "คัดสรรเฉพาะรถรุ่นท็อป เบาะ Executive Lounge VIP ปรับไฟฟ้า นวดหลัง พร้อมเครื่องฟอกอากาศ Nanoe-X",
    pricingTag: "Transparent Pricing",
    pricingHeading: "ตารางอัตราค่าบริการ <span class='gold-text'>โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง</span>",
    pricingSub: "ตอบโจทย์ทั้งการเช่ารายวันพร้อมคนขับ ขับเอง รับส่งสนามบิน VIP และเช่าระยะยาวรายเดือนหักเป็นรายจ่ายทางภาษีได้สูงสุด 36,000 บาท/เดือน",
    calcTag: "Instant Quote Estimator",
    calcHeading: "ระบบคำนวณราคาเช่ารถ <span class='gold-text'>Alphard VIP อัตโนมัติ</span>",
    calcSub: "เลือกรูปแบบการใช้งานและปลายทางเพื่อดูราคาประเมินเบื้องต้น พร้อมส่งข้อมูลจองผ่าน LINE หรือ WhatsApp ทันที",
    chauffeurTag: "Executive Chauffeur Standards",
    chauffeurHeading: "มาตรฐานคนขับผู้บริหาร <span class='gold-text'>10 ขั้นตอนตามมาตรฐาน Manserv</span>",
    chauffeurSub: "ไม่ใช่แค่คนขับรถ แต่คือผู้ช่วยส่วนตัวมืออาชีพที่ผ่านการตรวจประวัติอาชญากรรม อบรมทักษะ 7 ประการ และทดสอบจิตวิทยา",
    corporateTag: "Corporate B2B Solution",
    corporateHeading: "สิทธิประโยชน์สำหรับ <span class='gold-text'>ลูกค้าองค์กร & นิติบุคคล</span>",
    corporateSub: "วางใจในบริการรถประจำตำแหน่งผู้บริหาร สัญญาเช่ารายเดือน-รายปี พร้อมออกใบกำกับภาษีถูกต้องตามกฎหมาย",
    destTag: "VIP Routes & Transfers",
    destHeading: "เส้นทางยอดนิยม & <span class='gold-text'>บริการรับส่งสนามบิน VIP</span>",
    destSub: "รวมบริการ Fast-Track Meet & Greet ถือป้ายต้อนรับที่ประตูทางออกสนามบินสุวรรณภูมิและดอนเมือง",
    faqTag: "AEO Quick Answers",
    faqHeading: "คำถามที่พบบ่อย <span class='gold-text'>(FAQ & AEO)</span>",
    faqSub: "รวมทุกคำตอบที่ลูกค้าและผู้บริหารสอบถามบ่อย เพื่อความชัดเจนและรวดเร็วก่อนการตัดสินใจ",
    contactTag: "Fast VIP Reservation",
    contactHeading: "จองรถล่วงหน้า หรือ <span class='gold-text'>ติดต่อฝ่ายบริการลูกค้า 24 ชม.</span>",
    contactSub: "ทีมงานพร้อมให้คำปรึกษาและจัดหารถที่ตรงกับความต้องการของท่านภายใน 15 นาที",
    lineButtonText: "ทักแชท LINE (@premiumcar.rent)",
    whatsappButtonText: "WhatsApp Chat (English/中文)",
    callButtonText: "โทร 063-535-9954",
    calcSummaryTitle: "สรุปรายการประเมินราคา",
    calcVehicleLabel: "รุ่นรถยนต์:",
    calcServiceLabel: "รูปแบบบริการ:",
    calcRouteLabel: "เส้นทาง/ปลายทาง:",
    calcDurationLabel: "ระยะเวลาใช้งาน:",
    calcEstimatedTotal: "ยอดรวมประมาณการ:",
    calcNotice: "*ราคารวมคนขับและประกันภัยชั้น 1 พาณิชย์ (ไม่รวมค่าน้ำมัน ทางด่วน และค่าที่จอดรถตามจริง)",
    calcBtnSendLine: "ส่งสรุปราคานี้เข้า LINE เพื่อยืนยันรถว่าง",
    calcBtnSendWhatsApp: "Send Quote to WhatsApp"
  },
  en: {
    navFleet: "VIP Fleet",
    navPricing: "Rates & Pricing",
    navChauffeur: "10-Step Chauffeur",
    navCorporate: "Corporate Leasing",
    navCalculator: "Rate Estimator",
    navFaq: "FAQ",
    navContact: "Reserve Now",
    heroBadge1: "Latest Models 2024-2026",
    heroBadge2: "10-Step Vetted Chauffeurs",
    heroBadge3: "Corporate Tax Deductible (36k/mo)",
    heroTitle: "Luxury <span class='gold-text'>Toyota Alphard VIP</span> Rental with Professional Chauffeur",
    heroDesc: "Elevate your journey with executive transportation, VIP airport transfers, luxury tourism, and corporate long-term leasing. Featuring pristine condition vehicles, hospital-grade sanitized cabins, and 100% background-checked English-speaking chauffeurs.",
    btnBookNow: "Instant Booking via LINE",
    btnCallNow: "<span>📞&nbsp;Call&nbsp;063&#8209;535&#8209;9954</span>",
    btnCalculate: "Calculate Instant Quote",
    fleetTag: "Exclusive VIP Fleet",
    fleetHeading: "Our Luxury Fleet: <span class='gold-text'>Toyota Alphard & Vellfire</span>",
    fleetSub: "Top-tier models equipped with Executive Lounge First-Class captain seats, massage functions, ottoman leg rests, and Nanoe-X air purification.",
    pricingTag: "Transparent Pricing",
    pricingHeading: "Transparent Rates <span class='gold-text'>No Hidden Fees</span>",
    pricingSub: "Tailored for daily chauffeur service, self-drive rental, VIP airport fast-track transfer, and B2B corporate monthly leasing deductible up to 36,000 THB/month.",
    calcTag: "Instant Quote Estimator",
    calcHeading: "Automated <span class='gold-text'>VIP Alphard Rental Calculator</span>",
    calcSub: "Select your desired vehicle, service type, and destination to get an instant quote and book directly through LINE or WhatsApp.",
    chauffeurTag: "Executive Chauffeur Standards",
    chauffeurHeading: "Executive Chauffeur <span class='gold-text'>10-Step Screening Protocol</span>",
    chauffeurSub: "Not merely a driver, but an elite personal mobility concierge vetted through criminal background checks, DISC psychological tests, and 7 core hospitality skills.",
    corporateTag: "Corporate B2B Solution",
    corporateHeading: "Exclusive Benefits for <span class='gold-text'>Corporate & Multinational Clients</span>",
    corporateSub: "Trusted executive car service for C-Level management and VIP business delegations. Fully tax deductible up to 36,000 THB/month with 2-4 hr replacement car guarantee.",
    destTag: "VIP Routes & Transfers",
    destHeading: "Popular VIP Destinations & <span class='gold-text'>Airport Fast-Track</span>",
    destSub: "Complimentary meet & greet service with personalized nameboard at Suvarnabhumi (BKK) and Don Mueang (DMK) arrival gates.",
    faqTag: "AEO Quick Answers",
    faqHeading: "Frequently Asked Questions <span class='gold-text'>(FAQ & AEO)</span>",
    faqSub: "Direct, transparent answers designed for travelers and corporate procurement managers.",
    contactTag: "Fast VIP Reservation",
    contactHeading: "Reserve in Advance or <span class='gold-text'>Contact 24/7 VIP Concierge</span>",
    contactSub: "Our team will verify vehicle availability and confirm your booking reservation within 15 minutes.",
    lineButtonText: "Chat on LINE (@premiumcar.rent)",
    whatsappButtonText: "WhatsApp VIP Concierge",
    callButtonText: "Call +66 63 535 9954",
    calcSummaryTitle: "Estimated Quote Summary",
    calcVehicleLabel: "Vehicle Model:",
    calcServiceLabel: "Service Type:",
    calcRouteLabel: "Route / Destination:",
    calcDurationLabel: "Duration:",
    calcEstimatedTotal: "Estimated Total:",
    calcNotice: "*Includes professional chauffeur & commercial 1st-class insurance. Fuel, expressway tolls, and parking fees billed at actual cost.",
    calcBtnSendLine: "Send This Quote to LINE for Availability",
    calcBtnSendWhatsApp: "Send Quote to WhatsApp Concierge"
  }
};

let currentLang = 'th';

function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const storedLang = localStorage.getItem('premiumcar_lang') || 'th';
  setLanguage(storedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.dataset.lang;
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('premiumcar_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update toggle buttons active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    if (b.dataset.lang === lang) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  // Update all elements with data-i18n
  const dict = i18n[lang] || i18n.th;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update elements with data-th and data-en attributes
  document.querySelectorAll('[data-th][data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', text);
      } else {
        el.innerHTML = text;
      }
    }
  });

  // Re-calculate to update summary language
  if (typeof updateCalculatorSummary === 'function') {
    updateCalculatorSummary();
  }
}

/* ==========================================================================
   2. Sticky Header Scroll Effect & Mobile Nav
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active-mobile');
      const isExpanded = navLinks.classList.contains('active-mobile');
      mobileBtn.setAttribute('aria-expanded', isExpanded);
      mobileBtn.innerHTML = isExpanded ? '✕' : '☰';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active-mobile');
        mobileBtn.innerHTML = '☰';
      });
    });
  }
}

/* ==========================================================================
   3. Fleet Showcase Tabs
   ========================================================================== */
const fleetData = {
  "alphard-40": {
    badgeTh: "โฉมล่าสุด 2024 - 2026",
    badgeEn: "Latest 40 Series (2024-2026)",
    titleTh: "All-New Toyota Alphard 40 Series VIP",
    titleEn: "All-New Toyota Alphard 40 Series VIP",
    subTh: "เบาะ Executive Lounge ปรับไฟฟ้าคู่หน้า-หลัง พร้อมระบบนวดหลัง และหลังคามูนรูฟคู่",
    subEn: "Executive Lounge Captain Seats, Dual Panoramic Moonroof & Ottoman Massage",
    image: "assets/images/hero-alphard.webp",
    specs: [
      { icon: "💺", titleTh: "เบาะที่นั่ง", titleEn: "Seating", valueTh: "Executive Lounge 6-7 ที่นั่ง", valueEn: "Executive Lounge 6-7 Seats" },
      { icon: "⚡", titleTh: "ระบบขับเคลื่อน", titleEn: "Powertrain", valueTh: "2.5 HEV Hybrid นุ่มนวล ประหยัดน้ำมัน", valueEn: "2.5 HEV Hybrid Ultra Smooth" },
      { icon: "🛡️", titleTh: "ความปลอดภัย", titleEn: "Safety", valueTh: "Toyota Safety Sense 3.0 กล้อง 360°", valueEn: "Toyota Safety Sense 3.0 & 360° Camera" },
      { icon: "❄️", titleTh: "อากาศในห้องโดยสาร", titleEn: "Clean Air", valueTh: "Nanoe-X ดับกลิ่น ฆ่าเชื้อแบคทีเรีย", valueEn: "Nanoe-X Hospital Grade Purification" },
      { icon: "📱", titleTh: "เทคโนโลยี", titleEn: "Entertainment", valueTh: "จอเพดาน 14 นิ้ว, Apple CarPlay/Android", valueEn: "14-inch VIP Screen & Wireless Audio" },
      { icon: "🧳", titleTh: "พื้นที่สัมภาระ", titleEn: "Luggage", valueTh: "กระเป๋าเดินทางขนาดใหญ่ 4-5 ใบ", valueEn: "4-5 Large Suitcases Capacity" }
    ],
    priceFrom: "9,500",
    periodTh: "บาท / วัน (รวมคนขับ 10 ชม.)",
    periodEn: "THB / Day (With Chauffeur 10 hrs)"
  },
  "vellfire-hev": {
    badgeTh: "สปอร์ต พรีเมียม ทันสมัย",
    badgeEn: "Sport Luxury Edition 2024-2026",
    titleTh: "All-New Toyota Vellfire 2.5 HEV Sport VIP",
    titleEn: "All-New Toyota Vellfire 2.5 HEV Sport VIP",
    subTh: "ดีไซน์สปอร์ตหรู กระจังหน้าโครเมียมรมดำ ช่วงล่างจูนพิเศษแน่นนุ่ม เหมาะสำหรับผู้นำรุ่นใหม่",
    subEn: "Dynamic Sport Styling, Dark Chrome Accents, Fine-tuned Suspension for VIP Executives",
    image: "assets/images/fleet-vellfire.webp",
    specs: [
      { icon: "💺", titleTh: "เบาะที่นั่ง", titleEn: "Seating", valueTh: "VIP Captain Seats หนังแท้ Nappa", valueEn: "VIP Nappa Leather Captain Seats" },
      { icon: "⚡", titleTh: "ระบบขับเคลื่อน", titleEn: "Powertrain", valueTh: "E-Four ขับเคลื่อน 4 ล้อ ไฟฟ้า HEV", valueEn: "E-Four All-Wheel Drive Hybrid" },
      { icon: "🛡️", titleTh: "ความปลอดภัย", titleEn: "Safety", valueTh: "TSS 3.0 พร้อมระบบช่วยเบรกอัตโนมัติ", valueEn: "Toyota Safety Sense 3.0 & AEB" },
      { icon: "❄️", titleTh: "ความสะดวกสบาย", titleEn: "Comfort", valueTh: "ม่านบังแดดไฟฟ้า แอร์แยกอิสระ 3 โซน", valueEn: "Power Sunshades & Tri-Zone Climate" },
      { icon: "📱", titleTh: "เทคโนโลยี", titleEn: "Tech", valueTh: "ชาร์จโทรศัพท์ไร้สาย หน้าจอดิจิทัล 12.3 นิ้ว", valueEn: "Wireless Chargers & 12.3\" Screen" },
      { icon: "🧳", titleTh: "พื้นที่สัมภาระ", titleEn: "Luggage", valueTh: "กระเป๋าเดินทางขนาด 28 นิ้ว 4 ใบ", valueEn: "4 Large 28-inch Suitcases" }
    ],
    priceFrom: "8,500",
    periodTh: "บาท / วัน (รวมคนขับ 10 ชม.)",
    periodEn: "THB / Day (With Chauffeur 10 hrs)"
  },
  "alphard-30": {
    badgeTh: "ยอดนิยม คุ้มค่า สง่างาม",
    badgeEn: "Executive Class Value",
    titleTh: "Toyota Alphard 30 Series Minorchange VIP",
    titleEn: "Toyota Alphard 30 Series Minorchange VIP",
    subTh: "รุ่นยอดนิยมเหนือกาลเวลา เบาะมิกกี้เม้าส์ปรับไฟฟ้าครบฟังก์ชัน สะอาดเอี่ยม ได้รับการบำรุงรักษาศูนย์แท้ 100%",
    subEn: "Iconic VIP Chauffeur Choice, Full Electric Reclining Seats, Maintained to Strict 100% Dealer Specs",
    image: "assets/images/alphard-interior.webp",
    specs: [
      { icon: "💺", titleTh: "เบาะที่นั่ง", titleEn: "Seating", valueTh: "เบาะไฟฟ้า VIP Mickey Mouse 7 ที่นั่ง", valueEn: "Power VIP Captain Seats 7 Seats" },
      { icon: "⚡", titleTh: "ระบบขับเคลื่อน", titleEn: "Powertrain", valueTh: "เครื่องยนต์ 2.5 เบนซิน/ไฮบริด นุ่มเงียบ", valueEn: "2.5 Smooth & Quiet Powertrain" },
      { icon: "🛡️", titleTh: "ประกันภัย", titleEn: "Insurance", valueTh: "ประกันภัยชั้น 1 พาณิชย์ คุ้มครองสูงสุด", valueEn: "Commercial First-Class Coverage" },
      { icon: "❄️", titleTh: "ความสะอาด", titleEn: "Hygiene", valueTh: "อบโอโซนฆ่าเชื้อก่อนส่งมอบทุกเที่ยว", valueEn: "Ozone Sterilization Before Every Trip" },
      { icon: "📱", titleTh: "สิ่งอำนวยความสะดวก", titleEn: "Amenities", valueTh: "น้ำดื่ม VIP, ผ้าเย็น, Wi-Fi ฟรีบนรถ", valueEn: "Complimentary Water, Towels & Wi-Fi" },
      { icon: "🧳", titleTh: "พื้นที่สัมภาระ", titleEn: "Luggage", valueTh: "กระเป๋าเดินทาง 4-5 ใบ", valueEn: "4-5 Travel Suitcases" }
    ],
    priceFrom: "7,500",
    periodTh: "บาท / วัน (รวมคนขับ 10 ชม.)",
    periodEn: "THB / Day (With Chauffeur 10 hrs)"
  }
};

function initFleetTabs() {
  const tabs = document.querySelectorAll('.fleet-tab-btn');
  const fleetCard = document.querySelector('.fleet-card');
  if (!tabs.length || !fleetCard) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const model = tab.dataset.fleet;
      renderFleetModel(model);
    });
  });
}

function renderFleetModel(modelKey) {
  const data = fleetData[modelKey];
  if (!data) return;

  const badgeEl = document.querySelector('.fleet-badge');
  const titleEl = document.querySelector('.fleet-info h3');
  const subEl = document.querySelector('.fleet-info .vehicle-subtitle');
  const imgEl = document.querySelector('.fleet-media img');
  const specsContainer = document.querySelector('.fleet-specs-grid');
  const priceAmountEl = document.querySelector('.fleet-price-amount');
  const pricePeriodEl = document.querySelector('.fleet-price-period');

  // Fade out effect
  const fleetCard = document.querySelector('.fleet-card');
  fleetCard.style.opacity = '0.4';
  fleetCard.style.transition = 'opacity 0.25s ease';

  setTimeout(() => {
    const isEn = currentLang === 'en';
    if (badgeEl) badgeEl.textContent = isEn ? data.badgeEn : data.badgeTh;
    if (titleEl) titleEl.textContent = isEn ? data.titleEn : data.titleTh;
    if (subEl) subEl.textContent = isEn ? data.subEn : data.subTh;
    if (imgEl) {
      imgEl.src = data.image;
      imgEl.alt = isEn ? data.titleEn : data.titleTh;
    }
    if (priceAmountEl) priceAmountEl.textContent = data.priceFrom;
    if (pricePeriodEl) pricePeriodEl.textContent = isEn ? data.periodEn : data.periodTh;

    if (specsContainer) {
      specsContainer.innerHTML = data.specs.map(s => `
        <div class="spec-cell">
          <span class="spec-icon">${s.icon}</span>
          <div>
            <strong>${isEn ? s.titleEn : s.titleTh}:</strong>
            <span>${isEn ? s.valueEn : s.valueTh}</span>
          </div>
        </div>
      `).join('');
    }

    fleetCard.style.opacity = '1';
  }, 200);
}

/* ==========================================================================
   4. Interactive Quote Calculator
   ========================================================================== */
const pricingRules = {
  vehicles: {
    "alphard-40": {
      nameTh: "Toyota Alphard 40 Series (2024-2026)",
      nameEn: "Toyota Alphard 40 Series (2024-2026)",
      dailyChauffeur: 9500,
      dailySelfDrive: 7500,
      airportTransfer: 4200,
      monthlyCorporate: 95000
    },
    "vellfire-hev": {
      nameTh: "Toyota Vellfire 2.5 HEV Sport VIP",
      nameEn: "Toyota Vellfire 2.5 HEV Sport VIP",
      dailyChauffeur: 8500,
      dailySelfDrive: 6500,
      airportTransfer: 3800,
      monthlyCorporate: 85000
    },
    "alphard-30": {
      nameTh: "Toyota Alphard 30 Series Minorchange",
      nameEn: "Toyota Alphard 30 Series Minorchange",
      dailyChauffeur: 7500,
      dailySelfDrive: 5500,
      airportTransfer: 3200,
      monthlyCorporate: 75000
    }
  },
  routes: {
    "bkk": { nameTh: "กรุงเทพฯ และปริมณฑล (BKK Metro)", nameEn: "Bangkok & Metro Area", extraPerDay: 0 },
    "pattaya": { nameTh: "พัทยา / ชลบุรี (Pattaya)", nameEn: "Pattaya / Chonburi", extraPerDay: 800 },
    "huahin": { nameTh: "หัวหิน / ชะอำ (Hua Hin)", nameEn: "Hua Hin / Cha-Am", extraPerDay: 1200 },
    "khaoyai": { nameTh: "เขาใหญ่ / นครราชสีมา (Khao Yai)", nameEn: "Khao Yai National Park", extraPerDay: 1200 },
    "rayong": { nameTh: "ระยอง / นิคมอุตสาหกรรม EEC", nameEn: "Rayong / EEC Industrial Estate", extraPerDay: 1000 },
    "airport-bkk": { nameTh: "รับ/ส่ง สนามบินสุวรรณภูมิ (BKK Airport)", nameEn: "Suvarnabhumi Airport (BKK)", extraPerDay: 0 },
    "airport-dmk": { nameTh: "รับ/ส่ง สนามบินดอนเมือง (DMK Airport)", nameEn: "Don Mueang Airport (DMK)", extraPerDay: 0 }
  }
};

function initCalculator() {
  const vehicleSelect = document.getElementById('calc-vehicle');
  const serviceSelect = document.getElementById('calc-service');
  const routeSelect = document.getElementById('calc-route');
  const durationInput = document.getElementById('calc-duration');

  if (!vehicleSelect || !serviceSelect || !routeSelect || !durationInput) return;

  const triggerUpdate = () => updateCalculatorSummary();

  vehicleSelect.addEventListener('change', triggerUpdate);
  serviceSelect.addEventListener('change', () => {
    // If corporate monthly is chosen, adjust duration label/default
    const sVal = serviceSelect.value;
    const durLabel = document.querySelector('label[for="calc-duration"]');
    if (sVal === 'monthly') {
      if (durLabel) durLabel.textContent = currentLang === 'en' ? 'Duration (Months):' : 'ระยะเวลาเช่า (เดือน):';
      if (durationInput.value > 12) durationInput.value = 1;
      durationInput.min = 1;
      durationInput.max = 36;
    } else if (sVal === 'airport') {
      if (durLabel) durLabel.textContent = currentLang === 'en' ? 'Number of Trips (เที่ยว):' : 'จำนวนเที่ยวรับ-ส่ง (เที่ยว):';
      durationInput.min = 1;
      durationInput.max = 10;
    } else {
      if (durLabel) durLabel.textContent = currentLang === 'en' ? 'Duration (Days / วัน):' : 'จำนวนวันใช้งาน (วัน):';
      durationInput.min = 1;
      durationInput.max = 30;
    }
    triggerUpdate();
  });

  routeSelect.addEventListener('change', triggerUpdate);
  durationInput.addEventListener('input', triggerUpdate);

  // Initial Calculation
  updateCalculatorSummary();
}

function updateCalculatorSummary() {
  const vehicleSelect = document.getElementById('calc-vehicle');
  const serviceSelect = document.getElementById('calc-service');
  const routeSelect = document.getElementById('calc-route');
  const durationInput = document.getElementById('calc-duration');

  if (!vehicleSelect || !serviceSelect || !routeSelect || !durationInput) return;

  const vehicleKey = vehicleSelect.value;
  const serviceKey = serviceSelect.value;
  const routeKey = routeSelect.value;
  let duration = parseInt(durationInput.value, 10);
  if (isNaN(duration) || duration < 1) duration = 1;

  const vData = pricingRules.vehicles[vehicleKey] || pricingRules.vehicles["alphard-40"];
  const rData = pricingRules.routes[routeKey] || pricingRules.routes["bkk"];

  let unitRate = 0;
  let serviceNameTh = "";
  let serviceNameEn = "";
  let durationUnitTh = "วัน";
  let durationUnitEn = "days";

  if (serviceKey === 'chauffeur') {
    unitRate = vData.dailyChauffeur + rData.extraPerDay;
    serviceNameTh = "เช่าพร้อมคนขับมืออาชีพ (10 ชม./วัน)";
    serviceNameEn = "With Professional Chauffeur (10 hrs/day)";
    durationUnitTh = "วัน";
    durationUnitEn = "day(s)";
  } else if (serviceKey === 'selfdrive') {
    unitRate = vData.dailySelfDrive;
    serviceNameTh = "เช่าขับเอง (Self-Drive VIP)";
    serviceNameEn = "Self-Drive Luxury";
    durationUnitTh = "วัน";
    durationUnitEn = "day(s)";
  } else if (serviceKey === 'airport') {
    unitRate = vData.airportTransfer;
    serviceNameTh = "รับ-ส่งสนามบิน VIP Fast-Track";
    serviceNameEn = "Airport VIP Fast-Track Transfer";
    durationUnitTh = "เที่ยว";
    durationUnitEn = "trip(s)";
  } else if (serviceKey === 'monthly') {
    unitRate = vData.monthlyCorporate;
    serviceNameTh = "เช่ารายเดือนนิติบุคคล (หักภาษี 100%)";
    serviceNameEn = "B2B Monthly Corporate (100% Tax Deductible)";
    durationUnitTh = "เดือน";
    durationUnitEn = "month(s)";
  }

  // Calculate discount for longer stays
  let discountRate = 0;
  if (serviceKey === 'chauffeur' || serviceKey === 'selfdrive') {
    if (duration >= 7) discountRate = 0.10; // 10% off for weekly
    else if (duration >= 3) discountRate = 0.05; // 5% off for 3+ days
  } else if (serviceKey === 'monthly') {
    if (duration >= 12) discountRate = 0.10; // 10% off for 1 year lease
  }

  const subtotal = unitRate * duration;
  const discountAmount = Math.round(subtotal * discountRate);
  const total = subtotal - discountAmount;

  // DOM Elements to update
  const summaryVehicle = document.getElementById('summary-vehicle');
  const summaryService = document.getElementById('summary-service');
  const summaryRoute = document.getElementById('summary-route');
  const summaryDuration = document.getElementById('summary-duration');
  const summaryTotal = document.getElementById('summary-total');

  const isEn = currentLang === 'en';

  if (summaryVehicle) summaryVehicle.textContent = isEn ? vData.nameEn : vData.nameTh;
  if (summaryService) summaryService.textContent = isEn ? serviceNameEn : serviceNameTh;
  if (summaryRoute) summaryRoute.textContent = isEn ? rData.nameEn : rData.nameTh;
  if (summaryDuration) summaryDuration.textContent = `${duration} ${isEn ? durationUnitEn : durationUnitTh}` + (discountRate > 0 ? ` (ส่วนลด ${discountRate * 100}%)` : '');
  if (summaryTotal) summaryTotal.textContent = total.toLocaleString() + ' THB';

  // Update direct WhatsApp & Line Links with prefilled booking message
  updateBookingDirectLinks({
    vehicle: isEn ? vData.nameEn : vData.nameTh,
    service: isEn ? serviceNameEn : serviceNameTh,
    route: isEn ? rData.nameEn : rData.nameTh,
    duration: `${duration} ${isEn ? durationUnitEn : durationUnitTh}`,
    total: total.toLocaleString() + ' THB'
  });
}

function updateBookingDirectLinks(details) {
  const lineBtn = document.getElementById('calc-send-line');
  const whatsappBtn = document.getElementById('calc-send-whatsapp');

  const lineMsg = `สวัสดีครับ สนใจจองรถ Alphard VIP ผ่านเว็บไซต์ premiumcar.rent
- รุ่นรถ: ${details.vehicle}
- รูปแบบบริการ: ${details.service}
- เส้นทาง: ${details.route}
- ระยะเวลา: ${details.duration}
- ยอดประเมิน: ${details.total}
ต้องการตรวจสอบรถว่างในวันเดินทางครับ`;

  const waMsg = `Hello PremiumCar.rent VIP Concierge, I would like to check availability:
- Vehicle: ${details.vehicle}
- Service: ${details.service}
- Route: ${details.route}
- Duration: ${details.duration}
- Estimated Quote: ${details.total}
Please confirm car availability. Thank you!`;

  if (lineBtn) {
    lineBtn.href = `https://line.me/R/ti/p/@premiumcar.rent?text=${encodeURIComponent(lineMsg)}`;
    lineBtn.target = "_blank";
    lineBtn.rel = "noopener noreferrer";
  }

  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/66635359954?text=${encodeURIComponent(waMsg)}`;
    whatsappBtn.target = "_blank";
    whatsappBtn.rel = "noopener noreferrer";
  }
}

/* ==========================================================================
   5. AEO & FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerEl = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        answerEl.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answerEl.style.maxHeight = answerEl.scrollHeight + 30 + 'px';
      }
    });
  });
}

/* ==========================================================================
   6. Hero Quick Reservation Search Strip
   ========================================================================== */
function initHeroSearch() {
  const heroForm = document.getElementById('hero-booking-form');
  if (!heroForm) return;

  heroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const heroVehicle = document.getElementById('hero-vehicle-select');
    const heroService = document.getElementById('hero-service-select');
    const heroDate = document.getElementById('hero-date-input');

    // Sync with main calculator
    const calcVehicle = document.getElementById('calc-vehicle');
    const calcService = document.getElementById('calc-service');

    if (heroVehicle && calcVehicle) calcVehicle.value = heroVehicle.value;
    if (heroService && calcService) calcService.value = heroService.value;

    updateCalculatorSummary();

    // Smooth scroll down to calculator
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* ==========================================================================
   7. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('vip-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const date = form.querySelector('[name="date"]').value;
    const vehicle = form.querySelector('[name="vehicle"]').value;
    const message = form.querySelector('[name="message"]').value;

    const bookingMsg = `[ติดต่อจองรถ Alphard VIP]
ชื่อผู้ติดต่อ: ${name}
เบอร์โทรศัพท์: ${phone}
วันที่ต้องการใช้งาน: ${date}
รุ่นรถที่สนใจ: ${vehicle}
ข้อความเพิ่มเติม: ${message}`;

    // Prompt user to send directly via LINE or confirm
    const isEn = currentLang === 'en';
    const confirmText = isEn 
      ? `Thank you ${name}! Would you like to send this reservation directly to our 24/7 LINE VIP Concierge now?` 
      : `ขอบคุณ คุณ ${name}! ระบบได้บันทึกข้อมูลเรียบร้อยแล้ว ต้องการส่งข้อมูลเข้า LINE Official ของเราเพื่อรับการยืนยันรถว่างทันทีเลยหรือไม่ครับ?`;

    if (confirm(confirmText)) {
      window.open(`https://line.me/R/ti/p/@premiumcar.rent?text=${encodeURIComponent(bookingMsg)}`, '_blank');
    } else {
      alert(isEn ? "We have received your request and will contact you shortly." : "เจ้าหน้าที่จะติดต่อกลับตามเบอร์ที่ท่านได้ระบุไว้ภายใน 15 นาที ขอบพระคุณครับ");
    }

    form.reset();
  });
}
