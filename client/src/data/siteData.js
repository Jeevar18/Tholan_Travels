export const SITE = {
  name: "Tholan Travels",
  tagline: "Plan your next trip with Tholan Travels.",
  phone: "+91 90000 00000",
  whatsapp: "919000000000", // country code + number, no + or spaces
  email: "info@tholantravels.com",
  address: "Tamil Nadu, India",
  // Google Business Profile place id vachu maathikonga
  googleReviewLink:
    "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
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
  { id: "valparai-tour", name: "Valparai Tour", destination: "Valparai", image: "", duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
  { id: "pollachi-tour", name: "Pollachi Tour", destination: "Pollachi", image: "", duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
  { id: "aliyar-dam-tour", name: "Aliyar Dam Tour", destination: "Aliyar Dam", image: "", duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
  { id: "topslip-tour", name: "Topslip Tour", destination: "Topslip", image: "", duration: "", description: "", price: "Price on request", places: [], inclusions: [] },
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