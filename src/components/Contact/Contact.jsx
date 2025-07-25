import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div>
        <div className="container py-5">
          <h2 className="con-text">conatct section</h2>
          <div className="por-stare ">
            <i class=" popor  fa-solid fa-star"></i>
          </div>

          <div className="w-50 py-5 mx-auto">
            <div className="my-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
              />
            </div>
            <div className="my-3">
              <input
                type="number"
                className="form-control"
                id="userAge"
                placeholder="userAge"
              />
            </div>
            <div className="my-3">
              <input
                type="email"
                className="form-control"
                id="userEmail"
                placeholder="userEmail"
              />
            </div>
            <div className="my-3 ">
              <input
                type="password"
                className="form-control"
                id="userPassword"
                placeholder="userPassword"
              />
            </div>
            <button type="button" className="btn">
              {" "}
              send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
