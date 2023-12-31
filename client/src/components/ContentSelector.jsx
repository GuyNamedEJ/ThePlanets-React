import { useEffect, useState } from "react";

function ContentSelector({ tab, planetName, handleClick }) {
  const [active, setActive] = useState('overview');

  const styles = {
    active: {
      background: `var(--color-${planetName})`,
    },

    transparent: {
      backgroundColor: "transparent",
    },
  };

  const planetColor = `var(--color-${planetName})`;

  const setActiveTab = (button) => {
    let btns = document.querySelectorAll(".info-btn");

    btns.forEach((element) => {
      element.style.backgroundColor = "transparent";
    });
    
    button.style.backgroundColor = planetColor;
    setActive(button.getAttribute("data-value"));
    console.log(active);
    console.log(styles.active);
  };

  useEffect(()=>{
    setActive(tab)
  },[tab])

  const onClick = (e) => {
    let button = e.target;

    handleClick(button.getAttribute("data-value"));

    setActiveTab(button);
  };

  return (
    <section className="btn-holder spartan">
      <div
        style={active == "overview" ? styles.active : styles.transparent}
        onClick={onClick}
        data-value={"overview"}
        data-active=""
        id="m-overview"
        className="info-btn active "
      >
        01 Overview
      </div>

      <div
        style={active == "structure" ? styles.active : styles.transparent}
        onClick={onClick}
        data-value={"structure"}
        id="m-structure"
        className="info-btn"
      >
        02 Structure
      </div>

      <div
        style={active == "surface" ? styles.active : styles.transparent}
        onClick={onClick}
        data-value={"surface"}
        id="m-surface"
        className="info-btn"
      >
        03 Surface
      </div>
    </section>
  );
}
export default ContentSelector;
