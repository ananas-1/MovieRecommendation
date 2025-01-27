import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../Home/components/MovieCard/MovieCard";
import { GlobalContext } from "../Store/Store";
import "./movies.css";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

export default function Movies() {
  let { movies, pageMovie, setPageMovie } = useContext(GlobalContext);
  let startPage = 1;
  let endPage = Math.min(startPage + 5, 500);
  const [numbers, setNumbers] = useState(
    new Array(6).fill(1).map((num, i) => i + 1)
  );
  function displayPagination() {
    let num = [];
    if (pageMovie < startPage + 2) {
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    } else if (pageMovie > startPage + 2 && endPage == 500) {
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    } else {
      startPage = pageMovie - 2;
      endPage = pageMovie + 3;
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    }
  }

  useEffect(() => {
    displayPagination();
  }, [pageMovie]);

  return (
    <div className="row mt-3 gy-5">
      <div className="col-12">
        <h2>Top Movies</h2>
      </div>
      {Array.isArray(movies) && movies.length ? (
        movies.map((movie, i) => <MovieCard key={i} movie={movie} />)
      ) : (
        <></>
      )}
      <nav
        className="d-flex justify-content-center p-4 "
        aria-label="Page navigation example"
      >
        <Pagination numbers={numbers} page={pageMovie} setPage={setPageMovie} />
      </nav>
    </div>
  );
}
