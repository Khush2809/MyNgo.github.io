import React from "react";
import { ImSearch } from "react-icons/im";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import styles from "./styles";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <i className="zmdi zmdi-balance zmdi-hc-2x icon" styles={styles.icon}>
            RBI
          </i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                className="nav-link mr-4"
                href="/"
                activeClassName="active-class"
                style={styles.active_class}
              >
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link mr-4"
                to="/Dashboard"
                activeClassName="active-class"
                style={styles.active_class}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mr-4"
                to="/History"
                activeClassName="active-class"
                style={styles.active_class}
              >
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mr-4"
                to="/Contact"
                activeClassName="active-class"
                style={styles.active_class}
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link mr-4"
                to="/Profile"
                activeClassName="active-class"
                style={styles.active_class}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
