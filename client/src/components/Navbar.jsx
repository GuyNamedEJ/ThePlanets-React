import { useState } from "react";

function Navbar({ onClick }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    onClick(e.target.attributes.getNamedItem("name").value);
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
          <li onClick={handleClick} name={"Mercury"} className="nav-link">
            <div className="link-container">
              <div className="icon bg-Mercury"></div>
              Mercury
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Venus"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Venus"></div>
              Venus
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Earth"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Earth"></div>
              Earth
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Mars"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Mars"></div>
              Mars
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Jupiter"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Jupiter"></div>
              Jupiter
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Saturn"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Saturn"></div>
              Saturn
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Uranus"} className="nav-link">
          <div className="link-container">
              <div className="icon bg-Uranus"></div>
              Uranus
            </div>
            <img src="assets/icon-chevron.svg" alt="" />
          </li>
          <li onClick={handleClick} name={"Neptune"} className="nav-link">
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
