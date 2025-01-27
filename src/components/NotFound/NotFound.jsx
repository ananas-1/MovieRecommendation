import React from "react";
import "./notFound.css";
import { Link, useHref } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center text-white flex-column">
      <i className="fa-solid fa-face-frown fs-1"></i>
      <h2 className="mt-3">Not Found</h2>
      <Link to="">
        <button className="returnHome btn btn-danger" onClick={() => {}}>
          Return To Home
        </button>
      </Link>
    </div>
  );
}
