import React from "react";
import "./Navbar.css";
import logo from "../assets/NavBar/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#news">НОВОСТИ</a>
        <a href="#contestants">ЛИЦА КОНКУРСА</a>
        <a href="#criteria">КРИТЕРИИ ЗАЩИТЫ ПРОЕКТОВ</a>
        <a href="#how-to-join">КАК СТАТЬ СТУДЕНТОМ?</a>
        <a href="#contacts">КОНТАКТЫ</a>
      </div>
      <div className="navbar-apply">
        <button>ПОДАТЬ ЗАЯВКУ</button>
      </div>
    </div>
  );
};

export default Navbar;
