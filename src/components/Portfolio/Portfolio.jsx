import React, { useState } from "react";

import "./Prtfolio.css";
export default function Portfolio() {
  const [allimg, setAllimg] = useState([
    "/imgi_1_poert1.png",
    "/imgi_2_port2.png",
    "/imgi_3_port3.png",
    "/imgi_1_poert1.png",
    "/imgi_2_port2.png",
    "/imgi_3_port3.png",
  ]);

  const [selectedImg, setSelectedImg] = useState(null);

  

  return (
    <>
      <div>
        <div className="container py-3">
          <h2 className="port-text">portfolio component</h2>
          <div className="por-stare ">
            <i class=" popor  fa-solid fa-star"></i>
          </div>
          <div className="row g-5">
            {allimg.map(function (src) {
              return (
                <div pro={src} className="col-md-6 col-lg-4 ">
                  <div
                    onClick={() => setSelectedImg(src)}
                    className="porto-img position-relative"
                  >
                    <img className="rounded-2" src={src} alt="" />
                    <div className="layer rounded-2">
                      <i className=" text-white kber fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedImg && ( 
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 9999 }}
          onClick={() => setSelectedImg(null)}>
          <img
            src={selectedImg}
            alt="popup"
            className="img-fluid rounded"
            style={{ maxWidth: "90%", maxHeight: "80%" }}
            onClick={(e) => e.stopPropagation()}/>
        </div>
      )}
    </>
  );
}
