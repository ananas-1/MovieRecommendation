import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ saveDataUser }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorsMessage, setErrorsMessage] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function getData(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function validation() {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    return schema.validate(formData, { abortEarly: false });
  }

  function submitHandler(e) {
    let validate = validation();
    if (validate.error) {
      setErrorsMessage(validate.error.details);
    }
    e.preventDefault();
    axios
      .post(`http://hawas.runasp.net/api/v1/Login`, formData)
      .then((res) => {
        localStorage.setItem("Token", res.data.jwt);
        saveDataUser();
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data);
      });
  }

  return (
    <div className="loginPage w-75 mx-auto my-5">
      <h1 className="text-center">Login Now</h1>
      {errorMessage && (
        <h1 className="alert alert-danger h6">{errorMessage}</h1>
      )}
      {errorsMessage.length > 0 &&
        errorsMessage.map((error, i) => (
          <h1 key={i} className="alert alert-danger h6">
            {error.message}
          </h1>
        ))}
      <form onSubmit={submitHandler}>
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control mb-3"
          name="email"
          onChange={getData}
        />
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control mb-3"
          name="password"
          onChange={getData}
        />
        <button type="submit" className="btn login">
          Login
        </button>
      </form>
    </div>
  );
}
