

const LocationInfo = ({ location }) => {
  return (
    <article className="location">
        <h2 className="location__name">{location?.name}</h2>
        <ul className="location__list">
        <li className="location__item"><span className="location__label">Type:</span><span className="location__value">{location?.type}</span></li>
        <li className="location__item"><span className="location__label">Dimension:</span><span className="location__value">{location?.dimension || 'unknown' }</span></li>
        <li className="location__item"><span className="location__label">Population:</span><span className="location__value"></span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo
