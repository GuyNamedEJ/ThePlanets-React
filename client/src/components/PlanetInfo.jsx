import ContentSelector from "./ContentSelector";
import PlanetStats from "./PlanetStats";
import PlanetDisplay from "./PlanetDisplay";
import PlanetContent from "./PlanetContent";


function PlanetInfo({ planetData }) {
  
  return (
    <>
      <div className="container">
        <ContentSelector />
        <PlanetDisplay
          planetImg={planetData.images.planet}
          internalImg={planetData.images.internal}
          geologyImg={planetData.images.geology}
        />
        <PlanetContent/>
        <PlanetStats
          revolution={planetData.revolution}
          temp={planetData.temperature}
          rotation={planetData.rotation}
          radius={planetData.radius}
        />
      </div>
    </>
  );
}
export default PlanetInfo;
