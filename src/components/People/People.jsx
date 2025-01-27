import React, { useContext, useEffect, useState } from "react";
import PeopleCard from "../Home/components/PeopleCard/PeopleCard";
import { GlobalContext } from "../Store/Store";
import { Link } from "react-router-dom";
import "../Movies/movies.css";
import Pagination from "../Pagination/Pagination";

export default function People() {
  let { people, pagePeople, setPagePeople } = useContext(GlobalContext);
  let startPage = 1;
  let endPage = Math.min(startPage + 5, 500);
  const [numbers, setNumbers] = useState(
    new Array(6).fill(1).map((num, i) => i + 1)
  );
  function displayPagination() {
    let num = [];
    if (pagePeople < startPage + 2) {
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    } else if (pagePeople > startPage + 2 && endPage == 500) {
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    } else {
      startPage = pagePeople - 2;
      endPage = pagePeople + 3;
      for (let i = startPage; i <= endPage; i++) {
        num.push(i);
        setNumbers(num);
      }
    }
  }

  useEffect(() => {
    displayPagination();
  }, [pagePeople]);

  return (
    <div className="row mt-3 gy-5">
      <div className="col-12">
        <h2>Top People</h2>
      </div>
      {Array.isArray(people) && people.length ? (
        people.map((person, i) => <PeopleCard key={i} person={person} />)
      ) : (
        <></>
      )}
      <nav
        className="d-flex justify-content-center p-4 "
        aria-label="Page navigation example"
      >
        <Pagination
          numbers={numbers}
          page={pagePeople}
          setPage={setPagePeople}
        />
      </nav>
    </div>
  );
}
