import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export let GlobalContext = createContext(null);

export function GlobalContextProvider(props) {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [tv, setTv] = useState([]);
  const [pageMovie, setPageMovie] = useState(1);
  const [pagePeople, setPagePeople] = useState(1);
  const [pageTv, setPageTv] = useState(1);
  let location = useLocation();

  function getMovies(type, callback, page) {
    if (type == "person") {
      axios
        .get(
          `https://api.themoviedb.org/3/person/popular?api_key=a997ca6c6b18d8a40e25751e6c35585e&language=en-US&page=${page}`
        )
        .then((res) => {
          callback(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/${type}?api_key=a997ca6c6b18d8a40e25751e6c35585e&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
        )
        .then((res) => {
          callback(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    if (location.pathname.includes("movies")) {
      setPagePeople(1);
      setPageTv(1);
    } else if (location.pathname.includes("people")) {
      setPageMovie(1);
      setPageTv(1);
    } else if (location.pathname.includes("tv")) {
      setPagePeople(1);
      setPageMovie(1);
    }
  }, [location.pathname]);

  useEffect(() => {
    getMovies("person", setPeople, pagePeople);
    getMovies("tv", setTv, pageTv);
    getMovies("movie", setMovies, pageMovie);
  }, [pagePeople, pageTv, pageMovie]);
  return (
    <GlobalContext.Provider
      value={{
        movies,
        people,
        tv,
        setPageMovie,
        setPagePeople,
        setPageTv,
        pageMovie,
        pagePeople,
        pageTv,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
