import { useState, useEffect } from "react";

function MobileContentSelector({ tab, planetName, handleClick }) {
  const [active, setActive] = useState("overview");

  const styles = {
    active: {
      borderBottom: `5px solid var(--color-${planetName})`,
      color: 'white'
    },

    transparent: {
      borderBottom: "none",
      color: '#979797'
    },
  };

  const setActiveTab = (button) => {
    let btns = document.querySelectorAll(".info-btn");

    btns.forEach((element) => {
      element.classList.remove("active");
    });

    button.classList.add("active");
    setActive(button.getAttribute("data-value"));
    console.log(`the active tab is ${active}`);
  };

  const onClick = (e) => {
    let button = e.target;

    handleClick(button.getAttribute("data-value"));

    setActiveTab(button);
  };

  useEffect(() => {
    setActive(tab);
    console.log(`active tab is ${active}`);
  }, [tab]);

  return (
    <section className="mobile-btn-holder">
      <div
        style={active == "overview" ? styles.active : styles.transparent}
        onClick={onClick}
        data-value={"overview"}
        id="m-overview"
        className="info-btn active"
      >
        Overview
      </div>

      <div
        style={active == "structure" ? styles.active : styles.transparent}
        onClick={onClick}
        data-value={"structure"}
        id="m-structure"
        className="info-btn"
      >
        Structure
      </div>

      <div
        style={active == "surface" ? styles.active : styles.transparent}
        onClick={onClick}
        data-value={"surface"}
        id="m-surface"
        className="info-btn"
      >
        Surface
      </div>
    </section>
  );
}
export default MobileContentSelector;
