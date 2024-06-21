import React from "react";
import { menuLinks } from "../static/data";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="menu-container">
        {menuLinks.map((item) => {
          const { title, link } = item;
          return (
            <li className="menu-item">
              <Link to={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
