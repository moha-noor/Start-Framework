import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="bg-about d-flex align-items-center">
        <div className="container">
          <h2 className="text-center">about component</h2>

          <div className="stare ">
            <i class="  fa-solid fa-star text-white"></i>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
