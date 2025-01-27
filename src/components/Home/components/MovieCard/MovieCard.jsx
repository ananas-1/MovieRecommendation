import React from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../../../constant/imagePath";
import moviePlaceholder from "../../../../assets/film-poster-placeholder.png";
import "./movieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="col-md-2 crd">
      <Link to={`/movie/${movie.id}`}>
        <div className="w-100 h-100">
          <img
            className="w-100 h-100"
            src={
              imagePath(movie.poster_path)
                ? imagePath(movie.poster_path)
                : moviePlaceholder
            }
            alt=""
          />
          <p
            className="text-truncate"
            data-toggle="tooltip"
            data-placement="bottom"
            title={movie.title ? movie.title : movie.name}
          >
            {movie.title ? movie.title : movie.name}
          </p>
        </div>
      </Link>
    </div>
  );
}
