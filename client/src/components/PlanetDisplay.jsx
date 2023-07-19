function PlanetDisplay({planetImg, internalImg, geologyImg}) {

  return (
    <section className="planet-info-container">
      <div className="planet-img">
        <img id="planet-display" className="img-fluid" src={planetImg} alt="planet" />
        <img id="internal-display" className="img-fluid" src={internalImg}  alt="planet" />
        <img id="geology-display" className="img-fluid" src={geologyImg}  alt="planet" />
      </div>
      </section>
  )
}
export default PlanetDisplay