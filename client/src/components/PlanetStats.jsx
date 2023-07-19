function PlanetStats({ revolution, rotation, radius, temp}) {
  return (
    <section className="stats">
      <div className="stat-container">
        <h4 className="stat-label">Rotation Time</h4>
        <h3 className="stat">{rotation}</h3>
      </div>

      <div className="stat-container">
        <h4 className="stat-label">Revolution Time</h4>
        <h3 className="stat">{revolution}</h3>
      </div>

      <div className="stat-container">
        <h4 className="stat-label">Radius</h4>
        <h3 className="stat">{radius}</h3>
      </div>

      <div className="stat-container">
        <h4 className="stat-label">Average Temp.</h4>
        <h3 className="stat">{temp}</h3>
      </div>
    </section>
  )
}
export default PlanetStats