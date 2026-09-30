export default function PackageCard({ packageData }) {
  return (
    <article className="card package-card">
      <div className="package-image">
        {packageData.image ? (
          <img src={packageData.image} alt={packageData.name} />
        ) : (
          <span aria-hidden="true">🗺️</span>
        )}
      </div>
      <div className="package-content">
        <p className="package-destination">{packageData.destination}</p>
        <h3>{packageData.name}</h3>
        {packageData.duration && <p>{packageData.duration}</p>}
        {packageData.description && <p>{packageData.description}</p>}
        <p className="package-price">{packageData.price || "Price on request"}</p>
        {packageData.places?.length > 0 && (
          <div>
            <h4>Places</h4>
            <ul className="package-list">
              {packageData.places.map((place) => <li key={place}>{place}</li>)}
            </ul>
          </div>
        )}
        {packageData.inclusions?.length > 0 && (
          <div>
            <h4>Inclusions</h4>
            <ul className="package-list">
              {packageData.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}
            </ul>
          </div>
        )}
        <a href="#contact" className="btn btn-outline-green btn-sm">Enquire about this package</a>
      </div>
    </article>
  );
}