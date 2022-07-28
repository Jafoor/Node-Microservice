import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src="./images/logo.svg" alt="" className="logo" />
            <input type="checkbox" className="check" id="toggle" />
            <label for="toggle" className="hamburger" id="hamburger">
              <img src="./images/icon-hamburger.svg" alt="" />
            </label>

            <ul className="nav-ul" id="nav-ul">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#about-us">About</a>
              </li>
              <li className="nav-link">
                <a href="#">Services</a>
              </li>
              <li className="nav-link">
                <a href="#">Blog</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact</a>
              </li>
              <a href="#" className="btn">
                Get a Free Quote
              </a>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
