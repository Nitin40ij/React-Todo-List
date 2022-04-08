import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            Book_List
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="#" className="nav-link active">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
};
export default Nav;
