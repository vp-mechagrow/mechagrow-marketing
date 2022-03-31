import * as React from "react";

import logo from "../img/logo.svg";
import linkedin from "../img/social/linkedin.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter" style={{padding: "3rem 1.5rem 3rem" }}>
        <div className="content has-text-centered">
        <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "4em" }}
          />
          <div className="social">
          <a title="linkedin" href="www.mechagrow.cz">
            <img
              src={linkedin}
              alt="MechaGrow Linkedin"
              style={{ width: "1em", height: "1em" }}
            />
          </a>
        </div>
        </div>
        <div className="content has-text-centered">
          <p>
            MechGrow s.r.o. 2022  
          </p> 
        </div>
      </footer>
    );
  }
};

export default Footer;
