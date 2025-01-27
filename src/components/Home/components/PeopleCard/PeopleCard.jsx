import React from "react";
import { Link } from "react-router-dom";
import { imagePath } from "../../../../constant/imagePath";
import placeholderImage from "../../../../assets/966-9665317_placeholder-image-person-jpg.png";
import "../MovieCard/movieCard.css";

export default function PeopleCard({ person }) {
  return (
    <div key={person.id} className="col-md-2 crd">
      <Link to={`/people/${person.id}`}>
        <div className="w-100 h-100">
          <img
            className="w-100 h-100"
            src={
              imagePath(person.profile_path)
                ? imagePath(person.profile_path)
                : placeholderImage
            }
            alt=""
          />
          <p
            className="text-truncate"
            data-toggle="tooltip"
            data-placement="bottom"
            title={person.title ? person.title : person.name}
          >
            {person.title ? person.title : person.name}
          </p>
        </div>
      </Link>
    </div>
  );
}
