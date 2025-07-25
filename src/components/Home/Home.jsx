import React from "react";
import "./Home.css";
import human from "../../../src/assets/images/imgi_1_avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="bg-home py-5">
        <div className="container text-center home py-5">
          <img src={human} alt="" />

          <h2 className="pt-5">start Framework</h2>

          <div className="stare ">
            <i className="fa-solid fa-star text-white"></i>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
