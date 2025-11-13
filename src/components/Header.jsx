import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="mainmenu sticky">
      <h1 className="name">Toni Thomas</h1>
      <nav aria-label="Primary">
        <div className="button-container">
          <a href={`${import.meta.env.BASE_URL}#about`} className="button">
            About Me
          </a>
          <Link to="/education">
            <button className="button">Education</button>
          </Link>
          <Link to="/experience">
            <button className="button">Experience</button>
          </Link>
          <Link to="/contact">
            <button className="button">Contact</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
