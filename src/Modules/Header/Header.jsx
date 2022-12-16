import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="ps-4 nav-bar navbar navbar-dark bg-dark">
        <ul className="nav-bar-list">
          <li className="nav-bar-list-item">
            <Link to="/">home</Link>
          </li>
          <li className="nav-bar-list-item">
            <Link to="/form">create form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
