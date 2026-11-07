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

export type ExploreCategory = "Interiors" | "Exteriors" | "Living" | "Kitchens & baths";

/* ---------- Brand ---------- */

export const brand = {
  name: "Crown Bell Ventures",
  short: "Crown Bell",
  tagline: "A new standard for living well.",
  // PLACEHOLDER: confirm the company's base city
  city: "Lagos, Nigeria",
};

export const contact = {
  // PLACEHOLDER: replace with the real WhatsApp number in international format, digits only
  whatsapp: "2340000000000",
  // PLACEHOLDER
  phone: "+234 000 000 0000",
  // PLACEHOLDER
  email: "hello@crownbellventures.com",
  // PLACEHOLDER
  address: "Lekki Phase 1, Lagos",
  hours: "Mon – Sat · 9:00 – 18:00",
};

export const nav = [
  { href: "#company", label: "The company" },
  { href: "#perspective", label: "Perspective" },
  { href: "#essence", label: "Essence" },
  { href: "#developments", label: "Developments" },
  { href: "#services", label: "Services" },
  { href: "#explore", label: "Explore" },
  { href: "#contact", label: "Contact" },
];

/* ---------- Photography (PLACEHOLDER — Unsplash) ---------- */

export const photos = {
  heroDay: unsplash("1600585154340-be6161a56a0c"),
  heroNight: unsplash("1600585154526-990dced4db0d"),
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
  eyebrow: "Crown Bell Ventures · Real estate",
  titleTop: "Your next",
  titleEm: "address.",
  intro:
    "Homes, developments and investments shaped with care, built to hold their value and the life you build inside them.",
  location: brand.city,
};

/* ---------- 01 · The company ---------- */

export const company = {
  index: "01",
  eyebrow: "The company",
  statement: "We build places people are proud to",
  statementEm: "come home to.",
  body: [
    "Crown Bell Ventures is a real estate company working across development, sales, leasing and property management. We look for good land, design homes around how people actually live, and stay with our clients long after the keys change hands.",
    "Every project starts with the same questions: will it stand the test of time, will it be easy to live in, and will it be worth more tomorrow than it is today?",
  ],
  principles: [
    { title: "Considered design", text: "Light, proportion and materials chosen for daily life, not just the brochure." },
    { title: "Honest dealings", text: "Clear titles, clear pricing and clear timelines from the first conversation." },
    { title: "Lasting value", text: "Locations and specifications selected to protect what you invest." },
  ],
};

/* ---------- Photo journeys (sticky galleries) ---------- */

export const journeys = {
  interiors: {
    id: "interiors",
    eyebrow: "01 · Interiors",
    title: "Spaces made for",
    titleEm: "staying in.",
    items: [
      { src: photos.livingWood, alt: "Living room with timber feature wall", title: "Time to stay", caption: "Open living, warm timber" },
      { src: photos.livingStairs, alt: "Double-height living room with staircase", title: "Room to breathe", caption: "Double-height volume" },
      { src: photos.kitchenIsland, alt: "Kitchen with a long island", title: "Gather here", caption: "Kitchen and island" },
      { src: photos.livingGallery, alt: "Bright living room with gallery wall", title: "Natural light", caption: "Living room" },
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
      { src: photos.villaPoolTwo, alt: "Modern home with a long pool", title: "Water and light", caption: "Pool terrace" },
      { src: photos.glassStairs, alt: "Glass staircase looking out to a pool", title: "Open to the view", caption: "Indoor–outdoor flow" },
      { src: photos.housePool, alt: "Home with pool at dusk", title: "Evenings outside", caption: "Garden and pool" },
      { src: photos.villaWhite, alt: "White villa with pool", title: "Sun-washed", caption: "Terrace" },
      { src: photos.exteriorTrees, alt: "Modern house among trees", title: "Green edges", caption: "Landscaped garden" },
    ] satisfies Photo[],
  },
  living: {
    id: "living",
    eyebrow: "03 · Together",
    title: "Made for",
    titleEm: "good company.",
    items: [
      { src: photos.diningGreen, alt: "Dining table with green chairs", title: "The long table", caption: "Dining" },
      { src: photos.livingWarm, alt: "Warm living room", title: "Slow evenings", caption: "Lounge" },
      { src: photos.livingBeige, alt: "Neutral living room with round mirrors", title: "Soft light", caption: "Family room" },
      { src: photos.apartmentLiving, alt: "Apartment living area", title: "City living", caption: "Apartment" },
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
    { src: photos.livingStairs, alt: "Living room with staircase", title: "Arrive and exhale" },
    { src: photos.kitchenStone, alt: "Stone kitchen", title: "From kitchen to open air" },
    { src: photos.glassStairs, alt: "Glass stairs facing pool", title: "Every step, a view" },
    { src: photos.bedroomWhite, alt: "White bedroom", title: "Rest, properly" },
    { src: photos.villaPool, alt: "Villa with pool", title: "Weekends at home" },
    { src: photos.diningGreen, alt: "Dining room", title: "Room for everyone" },
    { src: photos.bedroomSoft, alt: "Soft bedroom", title: "Morning light" },
    { src: photos.houseWhite, alt: "White modern house", title: "Your next horizon" },
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
      image: { src: photos.heroNight, alt: "Modern facade at night" },
    },
    {
      key: "craft",
      label: "The craft",
      title: "Details you can feel.",
      text: "Solid materials, careful finishes and builders who take pride in the last five percent.",
      image: { src: photos.livingWood, alt: "Timber feature wall" },
    },
    {
      key: "home",
      label: "The home",
      title: "Made to be lived in.",
      text: "Layouts that work for real families: storage where you need it, space where you gather.",
      image: { src: photos.livingBeige, alt: "Calm living room" },
    },
  ],
};

/* ---------- 02 · Developments (PLACEHOLDER listings) ---------- */

export type DevelopmentStatus = "Selling now" | "Off-plan" | "Completed";

export type Development = {
  slug: string;
  name: string;
  location: string;
  status: DevelopmentStatus;
  type: string;
  bedrooms: string;
  summary: string;
  image: string;
};

export const developments: Development[] = [
  {
    slug: "crown-residences",
    name: "The Crown Residences",
    location: "Ikoyi, Lagos",
    status: "Selling now",
    type: "Apartments",
    bedrooms: "3 & 4 bedrooms",
    summary: "Light-filled apartments with private terraces and a shared rooftop garden.",
    image: photos.heroDay,
  },
  {
    slug: "bellview-terraces",
    name: "Bellview Terraces",
    location: "Lekki Phase 1, Lagos",
    status: "Off-plan",
    type: "Terraced homes",
    bedrooms: "4 bedrooms + BQ",
    summary: "Family terraces arranged around a landscaped courtyard, minutes from the coast.",
    image: photos.exteriorBrick,
  },
  {
    slug: "ventures-court",
    name: "Ventures Court",
    location: "Ajah, Lagos",
    status: "Off-plan",
    type: "Apartments",
    bedrooms: "2 & 3 bedrooms",
    summary: "Smart, well-priced homes for first-time buyers and investors.",
    image: photos.apartmentBlock,
  },
  {
    slug: "harbour-house",
    name: "Harbour House",
    location: "Victoria Island, Lagos",
    status: "Completed",
    type: "Penthouses",
    bedrooms: "4 & 5 bedrooms",
    summary: "A small collection of penthouses with wraparound views and private pools.",
    image: photos.villaPoolTwo,
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
      image: photos.exteriorWood,
    },
    {
      title: "Sales & acquisition",
      text: "Helping buyers find the right home or investment, with verified titles and transparent pricing.",
      image: photos.houseWhite,
    },
    {
      title: "Leasing & letting",
      text: "Matching quality homes with quality tenants, and handling the paperwork in between.",
      image: photos.apartmentLiving,
    },
    {
      title: "Property management",
      text: "Maintenance, collections and care that keeps buildings in top condition and owners stress-free.",
      image: photos.towers,
    },
    {
      title: "Real estate advisory",
      text: "Clear-headed advice on where, when and how to invest, backed by local market knowledge.",
      image: photos.livingGallery,
    },
  ],
  process: [
    { step: "01", title: "Conversation", text: "We listen to what you need: budget, location, timeline." },
    { step: "02", title: "Curation", text: "A shortlist of homes or opportunities that genuinely fit." },
    { step: "03", title: "Due diligence", text: "Titles, approvals and documentation checked properly." },
    { step: "04", title: "Keys & beyond", text: "Handover, then ongoing support whenever you need us." },
  ],
};

/* ---------- 04 · Explore ---------- */

export const exploreCategories: ExploreCategory[] = ["Interiors", "Exteriors", "Living", "Kitchens & baths"];

export const explore: Photo[] = [
  { src: photos.heroDay, alt: "Modern house at dusk", title: "Arrival", category: "Exteriors" },
  { src: photos.livingWood, alt: "Timber living room", title: "Timber and light", category: "Interiors" },
  { src: photos.kitchenIsland, alt: "Kitchen island", title: "The island", category: "Kitchens & baths" },
  { src: photos.villaPoolTwo, alt: "Pool terrace", title: "Pool terrace", category: "Exteriors" },
  { src: photos.diningGreen, alt: "Dining room", title: "Dining", category: "Living" },
  { src: photos.bedroomDark, alt: "Dark bedroom", title: "Primary suite", category: "Interiors" },
  { src: photos.exteriorTrees, alt: "House among trees", title: "Among the trees", category: "Exteriors" },
  { src: photos.livingBeige, alt: "Family room", title: "Family room", category: "Living" },
  { src: photos.bathGrey, alt: "Bathroom", title: "Stone bath", category: "Kitchens & baths" },
  { src: photos.readingChair, alt: "Reading corner", title: "Reading corner", category: "Interiors" },
  { src: photos.housePool, alt: "Garden pool", title: "Garden pool", category: "Exteriors" },
  { src: photos.livingWarm, alt: "Warm lounge", title: "Lounge", category: "Living" },
  { src: photos.kitchenWhite, alt: "White kitchen", title: "Clean lines", category: "Kitchens & baths" },
  { src: photos.bedroomWhite, alt: "White bedroom", title: "Guest room", category: "Interiors" },
  { src: photos.exteriorWood, alt: "Timber facade", title: "Timber facade", category: "Exteriors" },
  { src: photos.apartmentLiving, alt: "Apartment living", title: "City apartment", category: "Living" },
  { src: photos.kitchenStone, alt: "Stone kitchen", title: "Stone and steel", category: "Kitchens & baths" },
  { src: photos.glassStairs, alt: "Glass staircase", title: "Glass and water", category: "Interiors" },
  { src: photos.villaWhite, alt: "White villa", title: "White villa", category: "Exteriors" },
];

/* ---------- Footer ---------- */

export const legal =
  "All images are illustrative and for presentation purposes only. Furniture, finishes and landscaping are suggestions and may differ from the delivered homes.";
