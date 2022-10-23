import React from "react";
import "../css/Head.css";
import { FaAngleDown } from "react-icons/fa";

const Head = () => {
  return (
    <div className="head-container">
      <div className="head">
        <h3>Search properties to rent </h3>
        <div className="head-child">
          <span>Search with Search Bar</span>
          <span>
            <FaAngleDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Head;
