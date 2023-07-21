import { useState, useEffect } from "react";
import ContentSelector from "./ContentSelector";
import PlanetStats from "./PlanetStats";
import PlanetDisplay from "./PlanetDisplay";
import PlanetContent from "./PlanetContent";


function PlanetInfo({ planetData }) {
  const [content, setContent] = useState(planetData.overview.content);
  const [source, setSource] = useState(planetData.overview.source);
  const [planetImg, setPlanetImg] = useState(planetData.images.planet);
  const [contentToShow, setContentToShow] = useState('overview')
  
  const changeData = (term) =>{

    setContentToShow(term)
    switch(term){
      case "overview":
        setContent(planetData.overview.content)
        setSource(planetData.overview.source)
        setPlanetImg(planetData.images.planet)
        break;
      
      case "structure":
        setContent(planetData.structure.content)
        setSource(planetData.structure.source)
        setPlanetImg(planetData.images.internal)
        break;

      case "surface":
        setContent(planetData.geology.content)
        setSource(planetData.geology.source)
        setPlanetImg(planetData.images.geology)
        break;
      default:
        break;
    }
  }

  useEffect(() => {
   changeData(contentToShow)
  }, [planetData]);


  return (
    <>
    <ContentSelector planetName={planetData.name} handleClick={changeData} />
      <div className="container">
        <PlanetDisplay activeTab={contentToShow}
          planetImages={planetData.images}
        />
        <PlanetContent planetName={planetData.name} content={content} source={source} />
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
