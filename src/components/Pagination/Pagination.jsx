import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Store/Store";
import "./pagination.css";

export default function Pagination({ numbers, page, setPage }) {
  return (
    <ul className="pagination">
      <li className="page-item">
        <Link
          className="page-link"
          to="#"
          aria-label="Previous"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          <span className="bg-transparent" aria-hidden="true">
            &laquo;
          </span>
        </Link>
      </li>
      {numbers.map((num) => (
        <li
          key={num}
          className="page-item"
          onClick={() => {
            setPage(num);
          }}
        >
          <Link
            className={page == num ? "page-link activeLink" : "page-link"}
            to="#"
          >
            {num}
          </Link>
        </li>
      ))}
      <li className="page-item">
        <Link
          className="page-link"
          to="#"
          aria-label="Next"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          <span className="bg-transparent" aria-hidden="true">
            &raquo;
          </span>
        </Link>
      </li>
    </ul>
  );
}
