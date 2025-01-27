import React from "react";
import { Link } from "react-router-dom";
import "./links.css";
export default function Links({ link }) {
  return (
    <li className="nav-item">
      <Link className="nav-link navLinks" aria-current="page" to={link.path}>
        {link.name}
      </Link>
    </li>
  );
}
