/**
 * All website copy, images and listings live here.
 *
 * Everything marked PLACEHOLDER is stand-in content until Crown Bell Ventures
 * confirms the real details (locations, developments, contact info, photos).
 * Change it here and the whole site updates.
 */

/** Builds an Unsplash URL. Replace with "/images/your-photo.webp" once real photos are in /public/images. */
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`;

export type Photo = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
  category?: ExploreCategory;
};

export type ExploreCategory = "Interiors" | "Exteriors" | "Living" | "Kitchens & baths" | "Neighbourhoods";

/* ---------- Brand ---------- */

export const brand = {
  name: "Crown Bell Ventures",
  short: "Crown Bell",
  tagline: "A new standard for living well.",
  city: "Ajah, Lagos",
  country: "Nigeria",
};

const officeAddress = "Shop 9, Fantasy E-Plaza, Ekotedo Street, Addo, Ajah, Eti-Osa, Lagos State";

export const contact = {
  // International format, digits only. Assumed to be the same line as the phone number; change if WhatsApp is on another line.
  whatsapp: "2348060569282",
  phone: "0806 056 9282",
  phoneHref: "+2348060569282",
  email: "crownbellventures@gmail.com",
  address: officeAddress,
  addressLines: ["Shop 9, Fantasy E-Plaza", "Ekotedo Street, Addo", "Ajah, Eti-Osa, Lagos State"],
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`,
  // PLACEHOLDER: confirm office hours
  hours: "Mon – Sat · 9:00 – 18:00",
};

export const nav = [
  { href: "#company", label: "About" },
  { href: "#perspective", label: "Perspective" },
  { href: "#essence", label: "Essence" },
  { href: "#developments", label: "Developments" },
  { href: "#services", label: "Services" },
  { href: "#explore", label: "Explore" },
  { href: "#contact", label: "Contact" },
];

/* ---------- Photography (PLACEHOLDER — Unsplash) ----------
 * Nigerian photos (Lagos) are used wherever a suitable free image exists.
 * Interiors are still generic stock until the client's own photos arrive.
 */

export const photos = {
  // Lagos / Nigeria
  heroDay: unsplash("1765475467677-579353b25ce0"), // Lekki–Ikoyi Link Bridge, aerial by day
  heroNight: unsplash("1648023200201-8fcede127835"), // Lekki–Ikoyi Link Bridge at night
  estateCourtyard: unsplash("1745725427804-4d94df0c5eb7"),
  ikoyiTower: unsplash("1543414347-1c348021f279"),
  modernTerraces: unsplash("1628144688607-c373d8e3f31b"),
  apartmentBeige: unsplash("1531300365552-da5abe58a725"),
  estateStreet: unsplash("1752622176337-5d9315e2df6e"),
  whiteVilla: unsplash("1779487552425-65861889810b"),
  modernFacade: unsplash("1643297551340-19d8ad4f20ad"),
  lagosAerial: unsplash("1744907895363-d351aa6019ef"),
  apartmentColour: unsplash("1561848277-141e09d45928"),
  leafyLagos: unsplash("1639774275491-71d62502a4e0"),
  apartmentsBlue: unsplash("1779487581808-35371cd98732"),
  glassTowers: unsplash("1741900024959-c406f5e4eaa1"),
  lagosSkyline: unsplash("1749058388308-744fdc8991ed"),
  lagosSunset: unsplash("1569706971306-de5d78f6418e"),
  kitchenMarble: unsplash("1633119712778-30d94755de54"),
  kitchenMarbleTwo: unsplash("1633119713175-c53c29479984"),
  bungalowLawn: unsplash("1788024171338-e5b007e08bfb"),
  lagosCity: unsplash("1594538756542-8c88bda491c5"),

  // Nigerian / African-styled interiors
  loungeWarm: unsplash("1779218404492-0b0546062158"),
  loungeCosy: unsplash("1779218404505-6e669b205030"),
  stairArt: unsplash("1770731960107-86d5553af426"),
  decorTable: unsplash("1781341031120-911224d4bdbd"),
  wovenWall: unsplash("1766204176809-313373b37ca5"),
  patternChairs: unsplash("1779218449621-d7d6a55777ef"),
  livingNaija: unsplash("1673563932832-a0c9e0ed26f8"),
  livingNaijaTwo: unsplash("1673563932782-28daf64ff066"),
  diningNaija: unsplash("1659622543730-b393861b0c35"),
  livingArt: unsplash("1695684720698-3691d44a7c2e"),

  // Generic interiors and homes
  modernHouseEvening: unsplash("1600585154340-be6161a56a0c"),
  facadeNight: unsplash("1600585154526-990dced4db0d"),
  livingWood: unsplash("1600607687939-ce8a6c25118c"),
  exteriorWood: unsplash("1600566753190-17f0baa2a6c3"),
  livingGallery: unsplash("1600210492486-724fe5c67fb0"),
  bedroomWhite: unsplash("1600607687644-c7171b42498f"),
  villaPool: unsplash("1512917774080-9991f1c4c750"),
  villaPoolTwo: unsplash("1613490493576-7fde63acd811"),
  readingChair: unsplash("1586023492125-27b2c045efd7"),
  livingStairs: unsplash("1600566753086-00f18fb6b3ea"),
  glassStairs: unsplash("1600573472550-8090b5e0745e"),
  bedroomDark: unsplash("1616594039964-ae9021a400a0"),
  livingWarm: unsplash("1618221195710-dd6b41faaea6"),
  kitchenWhite: unsplash("1484154218962-a197022b5858"),
  kitchenStone: unsplash("1556911220-bff31c812dba"),
  apartmentBlock: unsplash("1545324418-cc1a3fa10c00"),
  towers: unsplash("1486406146926-c627a92ad1ab"),
  kitchenIsland: unsplash("1507089947368-19c1da9775ae"),
  exteriorBrick: unsplash("1600047509807-ba8f99d2cdde"),
  exteriorTrees: unsplash("1600607688969-a5bfcd646154"),
  bathGrey: unsplash("1600566752355-35792bedcfea"),
  villaWhite: unsplash("1613977257363-707ba9348227"),
  housePool: unsplash("1580587771525-78b9dba3b914"),
  houseWhite: unsplash("1600563438938-a9a27216b4f5"),
  diningGreen: unsplash("1617806118233-18e1de247200"),
  livingBeige: unsplash("1631679706909-1844bbd07221"),
  bedroomSoft: unsplash("1595526114035-0d45ed16cfbf"),
  apartmentLiving: unsplash("1522708323590-d24dbb6b0267"),
};

/* ---------- Hero ---------- */

export const hero = {
  eyebrow: "Crown Bell Ventures · Nigerian real estate",
  titleTop: "Your next",
  titleEm: "address.",
  intro:
    "Homes, land and investments across Lagos and Abuja, with clear titles and finishes built to hold their value.",
  location: "Ajah · Lagos · Nigeria",
};

/* ---------- 01 · The company ---------- */

export const company = {
  index: "01",
  eyebrow: "The company",
  statement: "We build places people are proud to",
  statementEm: "come home to.",
  body: [
    "Crown Bell Ventures is a Nigerian real estate company based in Ajah, Lagos. We develop, sell, let and manage homes and land across Lagos and Abuja, and we stay with our clients long after the keys change hands.",
    "We know what buyers here worry about: genuine titles, honest pricing, steady power and water, and builders who finish on time. Every project starts by getting those right.",
  ],
  principles: [
    { title: "Considered design", text: "Light, proportion and materials chosen for daily life, not just the brochure." },
    { title: "Honest dealings", text: "Verified titles, clear pricing and realistic timelines from the first conversation." },
    { title: "Lasting value", text: "Locations and specifications selected to protect what you invest." },
  ],
};

/* ---------- Mission & vision ---------- */

export const missionVision = {
  mission: {
    label: "Our mission",
    lead: "To make owning property in Nigeria",
    leadEm: "simple, safe and rewarding.",
    text: "We deliver well-built homes and genuine land with verified titles, fair pricing and flexible payment plans, so families, professionals and investors at home and in the diaspora can buy with confidence.",
  },
  vision: {
    label: "Our vision",
    lead: "To be Nigeria's most",
    leadEm: "trusted name in real estate.",
    text: "A company known across Lagos, Abuja and beyond for homes that hold their value, communities people are proud of, and promises that are kept.",
  },
};

/* ---------- Photo journeys (sticky galleries) ---------- */

export const journeys = {
  interiors: {
    id: "interiors",
    eyebrow: "01 · Interiors",
    title: "Spaces made for",
    titleEm: "staying in.",
    items: [
      { src: photos.loungeWarm, alt: "Warm lounge with sofas and African artwork", title: "Time to stay", caption: "Family lounge" },
      { src: photos.livingNaija, alt: "Bright living room with framed art", title: "Room to breathe", caption: "Living room" },
      { src: photos.kitchenMarble, alt: "Marble kitchen with pendant lights", title: "Gather here", caption: "Kitchen" },
      { src: photos.stairArt, alt: "Wooden staircase with artwork", title: "Every detail", caption: "Staircase" },
      { src: photos.bedroomDark, alt: "Bedroom with dark panelled wall", title: "Quiet hours", caption: "Primary suite" },
      { src: photos.bathGrey, alt: "Grey stone bathroom", title: "A private ritual", caption: "Bathroom" },
    ] satisfies Photo[],
  },
  outdoors: {
    id: "outdoors",
    eyebrow: "02 · Outdoors",
    title: "Life, taken",
    titleEm: "outside.",
    items: [
      { src: photos.estateCourtyard, alt: "Estate courtyard with palm trees", title: "Gated and green", caption: "Estate courtyard" },
      { src: photos.estateStreet, alt: "Quiet estate street lined with homes and palms", title: "Quiet streets", caption: "Interlocked estate road" },
      { src: photos.villaPoolTwo, alt: "Modern home with a long pool", title: "Water and light", caption: "Pool terrace" },
      { src: photos.bungalowLawn, alt: "Home with a wide lawn", title: "Room to grow", caption: "Garden" },
      { src: photos.housePool, alt: "Home with pool at dusk", title: "Evenings outside", caption: "Garden and pool" },
    ] satisfies Photo[],
  },
  living: {
    id: "living",
    eyebrow: "03 · Together",
    title: "Made for",
    titleEm: "good company.",
    items: [
      { src: photos.diningNaija, alt: "Dining room with table and chairs by the window", title: "The long table", caption: "Dining" },
      { src: photos.loungeCosy, alt: "Cosy living room with patterned cushions", title: "Slow evenings", caption: "Lounge" },
      { src: photos.livingNaijaTwo, alt: "Living room with a bowl of nuts on the table", title: "Soft light", caption: "Family room" },
      { src: photos.patternChairs, alt: "Two chairs beneath a large patterned artwork", title: "Made for conversation", caption: "Sitting area" },
    ] satisfies Photo[],
  },
};

/* ---------- Perspective (cinema section) ---------- */

export const perspective = {
  eyebrow: "Crown Bell · Experience",
  sub: "Architecture · Light · Life",
  titleTop: "A new",
  titleEm: "perspective.",
  lede: "See every space the way you will live in it.",
  frames: [
    { src: photos.loungeWarm, alt: "Warm lounge", title: "Arrive and exhale" },
    { src: photos.kitchenMarbleTwo, alt: "Marble kitchen", title: "Kitchens that work hard" },
    { src: photos.glassStairs, alt: "Glass stairs facing pool", title: "Every step, a view" },
    { src: photos.bedroomWhite, alt: "White bedroom", title: "Rest, properly" },
    { src: photos.villaPool, alt: "Villa with pool", title: "Weekends at home" },
    { src: photos.diningNaija, alt: "Dining room", title: "Room for everyone" },
    { src: photos.bedroomSoft, alt: "Soft bedroom", title: "Morning light" },
    { src: photos.lagosSunset, alt: "Sunset over Lagos rooftops", title: "Your next horizon" },
  ] satisfies Photo[],
};

/* ---------- Essence ---------- */

export const essence = {
  eyebrow: "Crown Bell · Essence",
  titleTop: "It is about",
  titleEm: "feeling at home.",
  lede: "Three ideas behind every home we deliver.",
  pillars: [
    {
      key: "vision",
      label: "The vision",
      title: "We start with the view.",
      text: "Before a single wall goes up we study light, air and outlook, so every room earns its place.",
      image: { src: photos.lagosSunset, alt: "Sunset over Lagos" },
    },
    {
      key: "craft",
      label: "The craft",
      title: "Details you can feel.",
      text: "Solid materials, careful finishes and builders who take pride in the last five percent.",
      image: { src: photos.wovenWall, alt: "Woven wall hangings and a potted palm" },
    },
    {
      key: "home",
      label: "The home",
      title: "Made to be lived in.",
      text: "Layouts that work for real families: storage where you need it, space where you gather.",
      image: { src: photos.livingNaija, alt: "Calm living room" },
    },
  ],
};

/* ---------- 02 · Developments (PLACEHOLDER listings) ---------- */

export type DevelopmentStatus = "Selling now" | "Off-plan" | "Completed";

export type Development = {
  slug: string;
  name: string;
  location: string;
  city: "Lagos" | "Abuja";
  status: DevelopmentStatus;
  type: string;
  bedrooms: string;
  /** Title document, e.g. C of O, Governor's Consent */
  title: string;
  paymentPlan: boolean;
  summary: string;
  image: string;
};

// PLACEHOLDER: sample developments until Crown Bell Ventures confirms its real projects.
export const developments: Development[] = [
  {
    slug: "addo-gardens",
    name: "Addo Gardens",
    location: "Addo, Ajah, Lagos",
    city: "Lagos",
    status: "Selling now",
    type: "Semi-detached duplexes",
    bedrooms: "3 & 4 bedrooms + BQ",
    title: "Governor's Consent",
    paymentPlan: true,
    summary: "A gated, family-sized estate minutes from our office, with good drainage, street lighting and 24-hour security.",
    image: photos.estateCourtyard,
  },
  {
    slug: "crown-residences",
    name: "The Crown Residences",
    location: "Ikoyi, Lagos",
    city: "Lagos",
    status: "Selling now",
    type: "Luxury apartments",
    bedrooms: "3 & 4 bedrooms",
    title: "Governor's Consent",
    paymentPlan: false,
    summary: "Light-filled apartments with private terraces, a rooftop pool and full-time power backup.",
    image: photos.ikoyiTower,
  },
  {
    slug: "bellview-terraces",
    name: "Bellview Terraces",
    location: "Lekki Phase 1, Lagos",
    city: "Lagos",
    status: "Off-plan",
    type: "Terraced duplexes",
    bedrooms: "4 bedrooms + BQ",
    title: "C of O",
    paymentPlan: true,
    summary: "Family terraces arranged around a landscaped courtyard, close to Admiralty Way and the coast.",
    image: photos.modernTerraces,
  },
  {
    slug: "ventures-court",
    name: "Ventures Court",
    location: "Sangotedo, Lagos",
    city: "Lagos",
    status: "Off-plan",
    type: "Apartments",
    bedrooms: "2 & 3 bedrooms",
    title: "C of O",
    paymentPlan: true,
    summary: "Smart, well-priced flats for first-time buyers and investors along the Lekki–Epe corridor.",
    image: photos.apartmentBeige,
  },
  {
    slug: "crown-haven",
    name: "Crown Haven Estate",
    location: "Ibeju-Lekki, Lagos",
    city: "Lagos",
    status: "Selling now",
    type: "Serviced plots",
    bedrooms: "300 – 600 sqm plots",
    title: "Registered survey & deed",
    paymentPlan: true,
    summary: "Dry, buildable land near the Lekki Free Trade Zone and the Dangote refinery: buy now, build when you're ready.",
    image: photos.estateStreet,
  },
  {
    slug: "maitama-heights",
    name: "Maitama Heights",
    location: "Maitama, Abuja",
    city: "Abuja",
    status: "Completed",
    type: "Detached duplexes",
    bedrooms: "5 bedrooms + BQ",
    title: "C of O",
    paymentPlan: false,
    summary: "A small collection of fully detached homes with private gardens in one of Abuja's most established districts.",
    image: photos.whiteVilla,
  },
];

/* ---------- 03 · Services ---------- */

export const services = {
  index: "03",
  eyebrow: "What we do",
  title: "One partner for the",
  titleEm: "whole journey.",
  items: [
    {
      title: "Property development",
      text: "From land acquisition and design to construction and handover, delivered to a standard we are proud to sign.",
      image: photos.apartmentColour,
    },
    {
      title: "Land sales & documentation",
      text: "Verified plots with C of O, Governor's Consent or registered survey, plus help perfecting your title with the Lands Registry.",
      image: photos.leafyLagos,
    },
    {
      title: "Sales & acquisition",
      text: "Helping buyers at home and in the diaspora find the right home or investment, with transparent pricing and payment plans.",
      image: photos.bungalowLawn,
    },
    {
      title: "Leasing & letting",
      text: "Matching quality homes with vetted tenants, from agreements and rent collection to renewals.",
      image: photos.apartmentsBlue,
    },
    {
      title: "Property management",
      text: "Facility management, power and water maintenance, service charges and repairs, so owners stay stress-free.",
      image: photos.glassTowers,
    },
    {
      title: "Real estate advisory",
      text: "Clear-headed advice on where, when and how to invest in Nigerian property, backed by on-the-ground market knowledge.",
      image: photos.lagosSkyline,
    },
  ],
  process: [
    { step: "01", title: "Conversation", text: "We listen to what you need: budget, location, timeline." },
    { step: "02", title: "Curation", text: "A shortlist of homes or opportunities that genuinely fit." },
    { step: "03", title: "Due diligence", text: "Title search, survey and building approvals checked before you pay." },
    { step: "04", title: "Keys & beyond", text: "Deed of assignment, handover, then ongoing support whenever you need us." },
  ],
};

/* ---------- 04 · Explore ---------- */

export const exploreCategories: ExploreCategory[] = ["Interiors", "Exteriors", "Living", "Kitchens & baths", "Neighbourhoods"];

export const explore: Photo[] = [
  { src: photos.estateCourtyard, alt: "Estate courtyard with palms", title: "Gated living", category: "Exteriors" },
  { src: photos.loungeWarm, alt: "Warm lounge with African art", title: "Warm and welcoming", category: "Interiors" },
  { src: photos.kitchenMarble, alt: "Marble kitchen", title: "The kitchen", category: "Kitchens & baths" },
  { src: photos.heroDay, alt: "Lekki–Ikoyi Link Bridge from above", title: "Lekki–Ikoyi Link Bridge", category: "Neighbourhoods" },
  { src: photos.diningNaija, alt: "Dining room", title: "Dining", category: "Living" },
  { src: photos.modernTerraces, alt: "Modern terraced homes", title: "Modern terraces", category: "Exteriors" },
  { src: photos.bedroomDark, alt: "Dark bedroom", title: "Primary suite", category: "Interiors" },
  { src: photos.lagosSkyline, alt: "Lagos skyline", title: "The Lagos skyline", category: "Neighbourhoods" },
  { src: photos.livingNaijaTwo, alt: "Family room", title: "Family room", category: "Living" },
  { src: photos.bathGrey, alt: "Bathroom", title: "Stone bath", category: "Kitchens & baths" },
  { src: photos.ikoyiTower, alt: "White residential tower", title: "Living up high", category: "Exteriors" },
  { src: photos.decorTable, alt: "Patterned side table and decor", title: "A corner with character", category: "Interiors" },
  { src: photos.estateStreet, alt: "Estate street with palm trees", title: "Quiet streets", category: "Neighbourhoods" },
  { src: photos.loungeCosy, alt: "Cosy lounge", title: "Lounge", category: "Living" },
  { src: photos.kitchenMarbleTwo, alt: "Marble kitchen with island", title: "Marble and steel", category: "Kitchens & baths" },
  { src: photos.whiteVilla, alt: "Modern white home", title: "Clean lines", category: "Exteriors" },
  { src: photos.bedroomWhite, alt: "White bedroom", title: "Guest room", category: "Interiors" },
  { src: photos.lagosSunset, alt: "Sunset over Lagos", title: "Evening over Lagos", category: "Neighbourhoods" },
  { src: photos.livingArt, alt: "Living area with art and a dining table", title: "Art at home", category: "Living" },
  { src: photos.villaPoolTwo, alt: "Pool terrace", title: "Pool terrace", category: "Exteriors" },
  { src: photos.stairArt, alt: "Wooden staircase with artwork", title: "The staircase", category: "Interiors" },
  { src: photos.heroNight, alt: "Lekki–Ikoyi Link Bridge at night", title: "Lagos after dark", category: "Neighbourhoods" },
  { src: photos.wovenWall, alt: "Woven wall hangings", title: "Woven details", category: "Interiors" },
  { src: photos.patternChairs, alt: "Chairs beneath patterned art", title: "Made for conversation", category: "Living" },
];

/* ---------- Footer ---------- */

export const legal =
  "All images are illustrative and for presentation purposes only. Furniture, finishes and landscaping are suggestions and may differ from the delivered homes.";
