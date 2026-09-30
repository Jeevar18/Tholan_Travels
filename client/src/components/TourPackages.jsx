import { PACKAGES } from "../data/siteData";
import PackageCard from "./PackageCard";

export default function TourPackages() {
  return (
    <section className="section alt" id="packages">
      <div className="container">
        <h2 className="section-title">Tour Packages</h2>
        <p className="section-sub">Contact us for package duration, itinerary and availability.</p>
        <div className="grid grid-3">
          {PACKAGES.map((packageData) => (
            <PackageCard key={packageData.id} packageData={packageData} />
          ))}
        </div>
      </div>
    </section>
  );
}