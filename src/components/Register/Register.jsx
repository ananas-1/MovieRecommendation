import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorsMessage, setErrorsMessage] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    rePassword: "",
  });
  function getData(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function validation() {
    let schema = Joi.object({
      userName: Joi.string().alphanum().min(3).max(30).required(),
      dateOfBirth: Joi.string()
        .required()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .messages({
          "string.pattern.base": "Birthdate must be in YYYY-MM-DD format",
        }),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      rePassword: Joi.ref("password"),
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
      .post(`http://hawas.runasp.net/api/v1/Register`, formData)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data);
      });
  }

  return (
    <div className="w-75 mx-auto my-5">
      <h1 className="text-center">Register Now</h1>
      {errorMessage.length > 0 && (
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
          User Name
        </label>
        <input
          type="text"
          className="form-control mb-3"
          name="userName"
          onChange={getData}
        />
        <label htmlFor="" className="form-label">
          Date Of Birth
        </label>
        <input
          type="date"
          className="form-control mb-3"
          name="dateOfBirth"
          onChange={getData}
        />
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
        <label htmlFor="" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control mb-3"
          name="rePassword"
          onChange={getData}
        />
        <button type="submit" className="btn register">
          Register
        </button>
      </form>
    </div>
  );
}
