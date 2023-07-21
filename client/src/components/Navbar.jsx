import { useState } from "react";

function Navbar({ onClick }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    let planet = e.target.getAttribute('data-name');
    onClick(planet);
    setToggle(false);
  };

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <header className="navbar">
      <h1 className="navbar-logo">The Planets</h1>
      <img
        className="hamburger"
        onClick={toggleNav}
        src="assets/icon-hamburger.svg"
        alt=""
      />
      <nav className={`${toggle ? "show" : "hide"}`}>
        <ul className="links">
          <li onClick={handleClick} data-name={"Mercury"} className="nav-link">
            <div className="link-container">
              <div className="icon bg-mercury"></div>
              Mercury
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Venus"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-venus"></div>
              Venus
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Earth"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Earth"></div>
              Earth
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Mars"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Mars"></div>
              Mars
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Jupiter"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Jupiter"></div>
              Jupiter
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Saturn"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Saturn"></div>
              Saturn
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Uranus"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Uranus"></div>
              Uranus
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} data-name={"Neptune"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Neptune"></div>
              Neptune
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
