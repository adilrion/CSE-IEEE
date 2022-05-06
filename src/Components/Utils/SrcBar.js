import React from "react";
import "./Utils.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SrcBar = () => {
  return (
    <div>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          name=""
          placeholder="Search.."
        />
        <button href="#" className="search-btn">
          <p className="fa-search">
            <BiSearchAlt2 />
          </p>
        </button>
      </div>
    </div>
  );
};

export default SrcBar;
