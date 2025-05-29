import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavigation = (e, target) => {
    e.preventDefault();
    if (target === "home") {
      navigate("/");
    } else {
      scrollToSection(target);
    }
    setMenuVisible(false);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div
          className="navbar-left"
          onMouseEnter={() => setMenuVisible(true)}
          onMouseLeave={() => setMenuVisible(false)}
        >
          <button className="menu-icon">
            <FaBars size={24} />
          </button>
          <a
            className="nav-link"
            href="#"
            onClick={(e) => handleNavigation(e, "home")}
          >
            Home
          </a>
          <div className={`menu-items ${menuVisible ? "visible" : ""}`}>
            <a href="#" onClick={(e) => handleNavigation(e, "about")}>
              About
            </a>
            <a href="#" onClick={(e) => handleNavigation(e, "education")}>
              Education
            </a>
            <a href="#" onClick={(e) => handleNavigation(e, "work")}>
              Work Experience
            </a>
            <a href="#" onClick={(e) => handleNavigation(e, "techskills")}>
              Technical Skills
            </a>
            <a href="#" onClick={(e) => handleNavigation(e, "projects")}>
              Technical Experience
            </a>
            <a href="#" onClick={(e) => handleNavigation(e, "certificates")}>
              Certificates
            </a>
            <a href="#" onClick={(e) => handleNavigation(e, "contact")}>
              Contact
            </a>
          </div>
        </div>
        <div className="navbar-right">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=moupriyaguin10@gmail.com&su=Regarding%20Your%20Portfolio&body=Hi%20Moupriya%2C"
            className="email-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMailOutline /> moupriyaguin10@gmail.com
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
