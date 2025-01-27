import React, { useEffect, useState } from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import People from "./components/People/People";
import Tv from "./components/Tv/Tv";
import Register from "./components/Register/Register";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";
import { jwtDecode } from "jwt-decode";
import PeopleDetails from "./components/Details/PeopleDetails";
import MovieDetails from "./components/Details/MovieDetails";
import TvDetails from "./components/Details/TvDetails";
import Footer from "./components/Footer/Footer";
export default function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  function saveDataUser() {
    if (localStorage.getItem("Token")) {
      let encodeToken = localStorage.getItem("Token");
      let decodeToken = jwtDecode(encodeToken);
      setUserData(decodeToken);
    }
  }

  function logOut() {
    localStorage.removeItem("Token");
    setUserData(null);
    navigate("/login");
  }

  function ProtectedRoute(props) {
    if (localStorage.getItem("Token") == null) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  }

  useEffect(() => {
    saveDataUser();
  }, []);

  return (
    <div>
      <NavBar userData={userData} logOut={logOut} />
      <div className="container">
        <Routes>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="people"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          />
          <Route
            path="tv"
            element={
              <ProtectedRoute>
                <Tv />
              </ProtectedRoute>
            }
          />
          <Route
            path="people/:id"
            element={
              <ProtectedRoute>
                <PeopleDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="movie/:id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="tv/:id"
            element={
              <ProtectedRoute>
                <TvDetails />
              </ProtectedRoute>
            }
          />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login saveDataUser={saveDataUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
