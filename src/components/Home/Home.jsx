import React, { useContext } from "react";
import "./home.css";
import MovieCard from "./components/MovieCard/MovieCard";
import PeopleCard from "./components/PeopleCard/PeopleCard";
import { GlobalContext } from "../Store/Store";
import TvCard from "./components/TvCard/TvCard";

export default function Home() {
  let { movies, people, tv } = useContext(GlobalContext);
  return (
    <>
      <div className="row mt-3 gy-5">
        <div className="col-md-4 d-flex align-items-center h-100">
          <div>
            <div className="brdr w-25"></div>
            <h2 className="title ">
              Trending <br /> Movies <br /> To Watch Right Now
            </h2>
            <p className="textHome">Top Trending Movies By Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {movies.slice(0, 10).map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>

      <div className="row mt-5 gy-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h2 className="title ">
              Trending <br /> People <br /> To Watch Right Now
            </h2>
            <p className="textHome">Top Trending People By Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {people.slice(0, 10).map((person, i) => (
          <PeopleCard key={i} person={person} />
        ))}
      </div>

      <div className="row mt-5 gy-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25"></div>
            <h2 className="title ">
              Trending <br /> Tv Shows <br /> To Watch Right Now
            </h2>
            <p className="textHome">Top Trending Tv Shows By Day</p>
            <div className="brdr"></div>
          </div>
        </div>
        {tv.slice(0, 10).map((tv, i) => (
          <TvCard key={i} tv={tv} />
        ))}
      </div>
    </>
  );
}
