import React from "react";

import "./Layout.css";

import { NavLink,Link, Outlet } from "react-router-dom";
import Home from './../Home/Home';

export default function Layout() {









  return (
    <>
      <nav className="navbar py-4 navbar-color  navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand text-white navbar-logo" to="Home">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-links ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link ms-2 text-white"
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-2 text-white" to="portfolio">
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ms-2 text-white" to="contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

      <div className=" before-footer py-5">
        <div className="container ">
          <div className="row">
            <div className="col-sm-4 py-4">
              <div className="box text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-sm-4 py-4">
              <div className="box text-center">
                <h3>AROUND THE WEB</h3>
                <div>
                  <div className="social-icon">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="social-icon">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="social-icon">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div className="social-icon">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 py-4">
              <div className="box text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <p className="text-center">Copyright © Your Website 2021</p>
      </footer>
    </>
  );
}
