import React from "react";

function Welcome() {
    return (
        <section className="welcome-section">
        <div className="container welcome">
          <div className="welcome-text">
            <h1 className="u-mb-small">
              consectetur adipiscing elit. Sed eu pharetra.
            </h1>
            <p className="u-mb-large">
              consectetur adipiscing elit. Sed eu pharetra ante. Nullam tempus eget ex sit amet congue.
            </p>
            <a href="#" className="btn">CONTACT US</a>
          </div>
          <div className="welcome-image">
            <img src="./images/cleaner.png" alt=""/>
          </div>
        </div>
      </section>
    )
}

export default Welcome;