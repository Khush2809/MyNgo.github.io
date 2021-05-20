import React from "react";
import logo from "./logo.png";

const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
        {/* <a className="navbar-brand" href="#">
       
      </a> */}
        <div>
          <img src={logo} className="logo" style={styles.logo}></img>
          <h3 className="Name" style={styles.Name}>
            The Yuva Unity Foundation
          </h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active ml-5">
              <a className="navlink" style={styles.navlink} href="/">
                <strong>Home</strong> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                className="navlink ml-5"
                to="/About"
                activeClassName="active-className"
                style={styles.navlink}
              >
                <strong>About</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navlink ml-5"
                to="/Contact"
                activeClassName="active-className"
                style={styles.navlink}
              >
                <strong>Contact_Us</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="navlink ml-5"
                to="/Members"
                activeClassName="active-className"
                style={styles.navlink}
              >
                <strong>Achievements</strong>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="navlink dropdown-toggle ml-5"
                style={styles.navlink}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <strong>More</strong>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
