import axios from "axios";
import React, { useEffect, useState } from "react";
import { imagePath } from "../../constant/imagePath";
import { useParams } from "react-router-dom";
import "./details.css";
import placeholderImage from "../../assets/966-9665317_placeholder-image-person-jpg.png";

export default function PeopleDetails() {
  let [details, setDetails] = useState(null);
  let { id } = useParams();
  function getDetails() {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=a997ca6c6b18d8a40e25751e6c35585e&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="row min-vh-100 align-items-center">
      <div className="col-md-3">
        <img
          className="w-100"
          src={
            imagePath(details?.profile_path)
              ? imagePath(details.profile_path)
              : placeholderImage
          }
          alt=""
        />
      </div>
      {console.log(details)}
      <div className="col-md-9">
        <h3>Name: {details?.name}</h3>
        <p>Birth Date: {details?.birthday ? details?.birthday : "Unknown"}</p>
        <p>Overview: {details?.biography ? details?.biography : "Unknown"} </p>
      </div>
    </div>
  );
}
