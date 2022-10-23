import React, { useState } from "react";
import "../css/Navbar.css";
import { RiHome6Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuControl = () => {
    setMenu(!menu);
  };
  return (
    <div className="nav-container">
      <div className="nav-left-div">
        <h2 className="logo">
          <RiHome6Fill className="logo-icon" />
          Estatery
        </h2>

        <div className="menu-div" onClick={menuControl}>
          {menu ? (
            <AiOutlineClose className="close-icon" />
          ) : (
            <AiOutlineMenuFold className="open-icon" />
          )}
        </div>

        <ul className="ul-list">
          <li>rent</li>
          <li>Buy</li>
          <li>sell</li>
          <li>
            manage property
            <FaAngleDown className="down-arrow-icon" />
          </li>
          <li>
            resources
            <FaAngleDown className="down-arrow-icon" />
          </li>
        </ul>
      </div>
      <div className="nav-right-div">
        <button className="login-btn">login</button>
        <button className="signup-btn">sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
