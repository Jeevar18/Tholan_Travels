export const SITE = {
  name: "Tholan Travels",
  tagline: "Safe, comfortable & affordable journeys across South India",
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
  { name: "Ooty", info: "Hill station • 2 Days", emoji: "🌄" },
  { name: "Kodaikanal", info: "Princess of hills • 2 Days", emoji: "🌲" },
  { name: "Munnar", info: "Tea gardens • 3 Days", emoji: "🍃" },
  { name: "Madurai", info: "Temple city • 1 Day", emoji: "🛕" },
  { name: "Rameswaram", info: "Pilgrimage • 2 Days", emoji: "🌊" },
  { name: "Kanyakumari", info: "Sunrise point • 3 Days", emoji: "🌅" },
];

export const SERVICES = [
  { title: "Local Rentals", desc: "Hourly & daily car rental for city travel.", icon: "🚖" },
  { title: "Outstation Trips", desc: "One-way & round trips to any destination.", icon: "🛣️" },
  { title: "Tour Packages", desc: "Ready-made family & group tour plans.", icon: "🗺️" },
  { title: "Airport Pickup & Drop", desc: "Punctual airport and railway transfers.", icon: "✈️" },
  { title: "Wedding & Events", desc: "Decorated cars and buses for functions.", icon: "💐" },
  { title: "Temple Tours", desc: "Comfortable pilgrimage trips with guidance.", icon: "🙏" },
];

export const CARS = [
  { name: "Swift Dzire", seats: "4 Seater", price: "₹12 / km", tag: "Sedan" },
  { name: "Toyota Innova", seats: "7 Seater", price: "₹18 / km", tag: "SUV" },
  { name: "Tempo Traveller", seats: "12 Seater", price: "₹26 / km", tag: "Group" },
  { name: "Mini Bus", seats: "25 Seater", price: "₹40 / km", tag: "Bus" },
];

export const PACKAGES = [
  { name: "Ooty – Coonoor Getaway", days: "2 Days / 1 Night", price: "₹6,500", note: "Car + driver, sightseeing" },
  { name: "Munnar Nature Trip", days: "3 Days / 2 Nights", price: "₹9,800", note: "Car + driver, tolls included" },
  { name: "Temple Circuit", days: "2 Days / 1 Night", price: "₹7,200", note: "Madurai • Rameswaram" },
];

export const WHY = [
  { title: "Verified Drivers", desc: "Experienced, polite and route-friendly drivers.", icon: "✅" },
  { title: "Clean & Safe Vehicles", desc: "Well-maintained, sanitized cars every trip.", icon: "🧼" },
  { title: "Transparent Pricing", desc: "No hidden charges. Clear rates upfront.", icon: "💰" },
  { title: "24/7 Support", desc: "Call or WhatsApp us anytime during your trip.", icon: "📞" },
];

export const GALLERY = ["🏞️", "🚐", "🛕", "🌄", "🚗", "🌊"];