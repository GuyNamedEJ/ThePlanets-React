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
          <li  className="nav-link">
            <div onClick={handleClick} data-name={"Mercury"} className="link-container">
              <div className="icon bg-mercury"></div>
              Mercury
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Venus"} className="link-container">
              <div className="icon bg-venus"></div>
              Venus
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Earth"} className="link-container">
              <div className="icon bg-Earth"></div>
              Earth
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Mars"} className="link-container">
              <div className="icon bg-Mars"></div>
              Mars
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Jupiter"} className="link-container">
              <div className="icon bg-Jupiter"></div>
              Jupiter
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Saturn"} className="link-container">
              <div className="icon bg-Saturn"></div>
              Saturn
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Uranus"} className="link-container">
              <div className="icon bg-Uranus"></div>
              Uranus
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
          <li  className="nav-link">
          <div onClick={handleClick} data-name={"Neptune"} className="link-container">
              <div className="icon bg-Neptune"></div>
              Neptune
            </div>
            <img className="chevron" src="assets/icon-chevron.svg" alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
