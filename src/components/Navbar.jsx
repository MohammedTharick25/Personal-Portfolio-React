import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { faHouse, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">MT</Link>
        </div>
        <div className="nav-links">
          <NavLink to="/">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ fontSize: "18px", paddingRight: "10px" }}
            />
            Home
          </NavLink>
          <NavLink to="about">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "18px", paddingRight: "10px" }}
            />
            About
          </NavLink>
          <NavLink to="projects">
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ fontSize: "18px", paddingRight: "10px" }}
            />
            Projects
          </NavLink>
          <NavLink to="contact">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: "18px", paddingRight: "10px" }}
            />
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
