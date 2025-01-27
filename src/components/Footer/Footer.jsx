import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="mt-5 footer">
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <div className="content">
              <div className="title mb-3">
                <h4>Noxe</h4>
                <div className="underLine"></div>
              </div>
              <div className="aboutUS">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem inventore quod, iste cupiditate iure ipsum quaerat
                  soluta. Consectetur, eum nam!
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="content">
              <div className="title mb-3">
                <h4>Pages</h4>
                <div className="underLine"></div>
              </div>

              <div className="pageLinks">
                <ul>
                  <li>
                    <Link to={"home"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"movies"}>Movies</Link>
                  </li>
                  <li>
                    <Link to={"people"}>people</Link>
                  </li>
                  <li>
                    <Link to={"tv"}>Tv</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="content">
              <div className="title mb-3">
                <h4>Contact Us</h4>
                <div className="underLine"></div>
              </div>

              <div className="pageLinks">
                <ul>
                  <li>
                    <p>
                      <i className="fa-solid fa-phone me-3"></i>+999 999 9999
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="me-3 fa-brands fa-facebook"></i>noxe
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="me-3 fa-brands fa-twitter"></i>noxe
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="me-3 fa-brands fa-instagram"></i>noxe
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
