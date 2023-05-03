import React from "react";
import { Link } from "react-router-dom";

const Teachnav = ({ Toggle }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-tranparent container ">
      <i className="navbar-brand bi bi-justify-left fs-4 " onClick={Toggle}>
        {" "}
      </i>
      <button
        className="navbar-toggler " style={{color:"white"}}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-body-text"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown ">
            <a
              className="nav-link  text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <i class="bi bi-person-circle" style={{fontSize:"30px"}}></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Sign in
              </a>
              
              <Link className="dropdown-item" to="/signin">
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Teachnav;