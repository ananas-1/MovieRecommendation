import React from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../../../constant/imagePath";
import moviePlaceholder from "../../../../assets/film-poster-placeholder.png";
import "../MovieCard/movieCard.css";

export default function TvCard({ tv }) {
  return (
    <div key={tv.id} className="col-md-2 crd">
      <Link to={`/tv/${tv.id}`}>
        <div className="w-100 h-100">
          <img
            className="w-100 h-100"
            src={
              imagePath(tv.poster_path)
                ? imagePath(tv.poster_path)
                : moviePlaceholder
            }
            alt=""
          />
          <p
            className="text-truncate"
            data-toggle="tooltip"
            data-placement="bottom"
            title={tv.title ? tv.title : tv.name}
          >
            {tv.title ? tv.title : tv.name}
          </p>
        </div>
      </Link>
    </div>
  );
}
