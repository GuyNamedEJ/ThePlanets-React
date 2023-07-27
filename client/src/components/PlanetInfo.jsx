import { useState, useEffect } from "react";
import MobileContentSelector from "./MobileContentSelector";
import ContentSelector from "./ContentSelector";
import PlanetStats from "./PlanetStats";
import PlanetDisplay from "./PlanetDisplay";
import PlanetContent from "./PlanetContent";


function PlanetInfo({ planetData }) {
  const [content, setContent] = useState(planetData.overview.content);
  const [source, setSource] = useState(planetData.overview.source);
  const [planetImg, setPlanetImg] = useState(planetData.images.planet);
  const [contentToShow, setContentToShow] = useState('overview')
  const [activeTab, setActiveTab] = useState('overview')
  
  const changeData = (term) =>{

    setContentToShow(term)
    switch(term){
      case "overview":
        setContent(planetData.overview.content)
        setSource(planetData.overview.source)
        setPlanetImg(planetData.images.planet)
        setActiveTab(term)
        break;
      
      case "structure":
        setContent(planetData.structure.content)
        setSource(planetData.structure.source)
        setPlanetImg(planetData.images.internal)
        setActiveTab(term)
        break;

      case "surface":
        setContent(planetData.geology.content)
        setSource(planetData.geology.source)
        setPlanetImg(planetData.images.geology)
        setActiveTab(term)
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
    <MobileContentSelector tab={activeTab} planetName={planetData.name} handleClick={changeData} />
      <div className="container">
        <PlanetDisplay activeTab={contentToShow}
          planetImages={planetData.images}
        />

        <div className="display-container">
        <PlanetContent planetName={planetData.name} content={content} source={source} />
        <ContentSelector tab={activeTab} planetName={planetData.name} handleClick={changeData} />
        </div>
       
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
