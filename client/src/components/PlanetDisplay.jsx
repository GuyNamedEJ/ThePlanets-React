function PlanetDisplay({activeTab, planetImages}) {

  const styles = {
    planet:{
      display: (activeTab == 'overview') || (activeTab == 'surface') ? "block" : "none",
    },

    structure:{
      display: activeTab == 'structure' ? "block" : "none",
    },

    geology:{
      display: activeTab == 'surface' ? "block" : "none",
      position: "absolute",
      top: "50%",
      width: "163px"
    }
  };


  return (
    <section className="planet-img-container">
      <div className="planet-img">
        <img style={styles.planet} src={planetImages.planet} alt="planet" />
        <img style={styles.structure} src={planetImages.internal} alt="planet" />
        <img style={styles.geology} src={planetImages.geology} alt="planet" />
      </div>
      </section>
  )
}
export default PlanetDisplay