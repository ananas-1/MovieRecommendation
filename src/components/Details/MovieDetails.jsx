import axios from "axios";
import React, { useEffect, useState } from "react";
import { imagePath } from "../../constant/imagePath";
import { useParams } from "react-router-dom";
import "./details.css";

export default function MovieDetails() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  function getDetails() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a997ca6c6b18d8a40e25751e6c35585e&language=eg-US`
      )
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => getDetails(), []);

  return (
    <div className="row min-vh-100 align-items-center">
      <div className="col-md-3">
        <img className="w-100" src={imagePath(details?.poster_path)} alt="" />
      </div>
      <div className="col-md-9">
        <h3>Title: {details?.title}</h3>
        <p>{details?.overview}</p>
        <p>
          <b className="me-3">genres:</b>
          {details?.genres.map((genre) => (
            <span>
              {genre.name} <b />
            </span>
          ))}
        </p>
        <p>Release date: {details?.release_date}</p>
      </div>
    </div>
  );
}
