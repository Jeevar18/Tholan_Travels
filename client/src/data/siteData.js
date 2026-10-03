import athirapallyImage from "../assets/packages/athirapally.jpg";
import valparaiImage from "../assets/packages/valparai.jpg";
import pollachiImage from "../assets/packages/pollachi-surroundings.jpg";

export const SITE = {
  name: "Tholan Travels",
  tamilName: "தோழன் டிராவல்ஸ்",
  tagline: "Anamalai Call Taxi",
  phone: "99762 64007",
  altPhone: "94868 70757",
  availability: "Available 24 Hours",
  whatsapp: "919000000000", // placeholder kept intentionally; unconfirmed WhatsApp number
  email: "info@tholantravels.com",
  address: "Tamil Nadu, India",
  // Google Business Profile place id vachu maathikonga
  googleReviewLink:
    "https://www.google.com/maps/place/Tholan+travels/@10.577006,77.173133,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba83387103056f7:0x8921378ea5ad314c!8m2!3d10.577006!4d77.173133!16s%2Fg%2F11ntnz8lst?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
};

// Real review vantha inga add pannunga. Example:
// { name: "Arun Kumar", time: "1 month ago", stars: 5, text: "Very good service!" },
// (optional) link: "google review direct link" kudutha "View on Google" antha link ku pogum

export const REVIEWS = [];

export const DESTINATIONS = [
  { id: "valparai", name: "Valparai", image: "", description: "Contact us to plan a visit.", icon: "⛰️" },
  { id: "pollachi", name: "Pollachi", image: "", description: "Contact us to plan a visit.", icon: "🌴" },
  { id: "aliyar-dam", name: "Aliyar Dam", image: "", description: "Contact us to plan a visit.", icon: "🌊" },
  { id: "topslip", name: "Topslip", image: "", description: "Contact us to plan a visit.", icon: "🌿" },
];

export const SERVICES = [
  { title: "Local Rentals", desc: "Hourly & daily car rental for city travel.", icon: "🚖" },
  { title: "Outstation Trips", desc: "One-way & round trips to any destination.", icon: "🛣️" },
  { title: "Tour Packages", desc: "Ready-made family & group tour plans.", icon: "🗺️" },
  { title: "Airport Pickup & Drop", desc: "Punctual airport and railway transfers.", icon: "✈️" },
  { title: "Wedding & Events", desc: "Decorated cars and buses for functions.", icon: "💐" },
  { title: "Temple Tours", desc: "Comfortable pilgrimage trips with guidance.", icon: "🙏" },
];

export const VEHICLES = [
  { id: "force-traveller", name: "Force Traveller", image: "", passengerCapacity: "", airConditioning: "", description: "" },
  { id: "tavera", name: "Tavera", image: "", passengerCapacity: "", airConditioning: "", description: "" },
  { id: "innova-crysta", name: "Innova Crysta", image: "", passengerCapacity: "", airConditioning: "", description: "" },
];

export const PACKAGES = [
  { id: "athirapally-tour", name: "Athirapally", destination: "Athirapally", image: athirapallyImage, duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
  { id: "valparai-tour", name: "Valparai", destination: "Valparai", image: valparaiImage, duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
  { id: "pollachi-surrounding-areas", name: "Pollachi Surrounding Areas", destination: "Pollachi Surrounding Areas", image: pollachiImage, duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
];

export const FEATURES = [
  { title: "Vehicle options", desc: "Browse listed vehicles and ask us about trip details.", icon: "🚐" },
  { title: "Destination ideas", desc: "Explore destinations available for trip planning.", icon: "🧭" },
  { title: "Tour packages", desc: "Review package options and request more information.", icon: "🗺️" },
  { title: "Direct enquiries", desc: "Contact us to discuss your travel requirements.", icon: "✉️" },
];

export const GALLERY = [
  { id: "valparai", title: "Valparai", image: "", icon: "⛰️" },
  { id: "pollachi", title: "Pollachi", image: "", icon: "🌴" },
  { id: "aliyar-dam", title: "Aliyar Dam", image: "", icon: "🌊" },
  { id: "topslip", title: "Topslip", image: "", icon: "🌿" },
  { id: "waterfalls", title: "Waterfalls", image: "", icon: "💧" },
  { id: "travel", title: "Vehicles and travel", image: "", icon: "🚐" },
];
// ---------- About page (real details vachu maathikonga) ----------
export const ABOUT = {
  intro: [
    "Tholan Travels is a trusted travel partner offering safe, comfortable and affordable car and tempo traveller services for families, groups and pilgrims.",
    "From local rentals to long outstation trips, hill station tours and temple circuits, we make every journey smooth with clean vehicles and experienced drivers.",
  ],
  stats: [
    { value: "5+", label: "Years of Experience" },
    { value: "1000+", label: "Happy Trips" },
    { value: "10+", label: "Vehicles" },
    { value: "24/7", label: "Customer Support" },
  ],
  areas: [
    "Anaimalai", "Pollachi", "Coimbatore", "Udumalpet", "Palani",
    "Valparai", "Ooty", "Kodaikanal", "Munnar", "Madurai", "Rameswaram", "Kanyakumari",
  ],
  owner: {
    name: "Owner Name",
    role: "Founder & Owner",
    message:
      "Our goal is simple: every customer should reach their destination safely, on time and with a smile.",
  },
  team: [
    { name: "Driver Name", role: "Senior Driver" },
    { name: "Driver Name", role: "Tour Coordinator" },
    { name: "Staff Name", role: "Customer Support" },
  ],
};