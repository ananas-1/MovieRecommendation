import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Store/Store";
import TvCard from "../Home/components/TvCard/TvCard";
import { Link } from "react-router-dom";
import "../Movies/movies.css";
import Pagination from "../Pagination/Pagination";

export default function Tv() {
  let { tv, pageTv, setPageTv } = useContext(GlobalContext);
  let startPage = 1;
  let endPage = Math.min(startPage + 5, 500);
  const [numbers, setNumbers] = useState(
    new Array(6).fill(1).map((num, i) => i + 1)
  );
  function displayPagination() {
    let num = [];
    if (pageTv < startPage + 2) {
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    } else if (pageTv > startPage + 2 && endPage == 500) {
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    } else {
      startPage = pageTv - 2;
      endPage = pageTv + 3;
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    }
  }

  useEffect(() => {
    displayPagination();
  }, [pageTv]);

  return (
    <div className="row mt-3 gy-5">
      <div className="col-12">
        <h2>Top TV Shows</h2>
      </div>
      {Array.isArray(tv) && tv.length ? (
        tv.map((tv, i) => <TvCard key={i} tv={tv} />)
      ) : (
        <></>
      )}
      <nav
        className="d-flex justify-content-center p-4 "
        aria-label="Page navigation example"
      >
        <Pagination numbers={numbers} page={pageTv} setPage={setPageTv} />
      </nav>
    </div>
  );
}
