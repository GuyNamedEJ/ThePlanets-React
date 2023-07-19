import { useEffect, useState } from "react";
import PlanetInfo from "../components/PlanetInfo";
import Navbar from "../components/Navbar";
import data from '../planets.json'
import getPlanet from "../api";

function Home() {
  const [planet, setPlanet] = useState(
    JSON.parse(localStorage.getItem("planet")) ||
      data.find((planet) => planet.name.toLowerCase() === "earth")
  );

  const setNewPlanet = (planetName) => {
    let newPlanet = data.find((planet) => planet.name.toLowerCase() === planetName.toLowerCase());
    localStorage.setItem("planet", JSON.stringify(newPlanet));
    setPlanet(newPlanet);
  };

  const setEarth = async () => {
    const result = await getPlanet('earth');
    setPlanet(result);
  };

  useEffect(()=>{
    if(localStorage.getItem("planet")){
      setPlanet(JSON.parse(localStorage.getItem("planet")))
    }
    else{
      setEarth();
    }
    
    console.log(planet);
  }, [])


  return (
    <>
      <Navbar onClick={setNewPlanet} />
      <PlanetInfo planetData={planet} />
    </>
  );
}
export default Home;
