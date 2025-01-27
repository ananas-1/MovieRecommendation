import React, { useContext } from "react";
import Links from "./navLinks/Links";
import { Link } from "react-router-dom";
import "./navBar.css";

let navLinks = [
  { name: "Home", path: "home" },
  { name: "Movies", path: "movies" },
  { name: "People", path: "people" },
  { name: "Tv", path: "tv" },
];

export default function NavBar({ userData, logOut }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100 top-0">
      <div className="container">
        <Link className="navbar-brand navBarTitle" to="">
          Noxe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <Links key={link.name} link={link} />
              ))}
            </ul>
          )}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white align-items-center">
            <li className="nav-item fs-5">
              <i className="me-3 fa-brands fa-facebook"></i>
              <i className="me-3 fa-brands fa-twitter"></i>
              <i className="me-3 fa-brands fa-instagram"></i>
            </li>
            {!userData && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="register">
                    Register
                  </Link>
                </li>
              </>
            )}

            {userData && (
              <li className="nav-item logOut" onClick={logOut}>
                LogOut
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
