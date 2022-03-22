import React from "react";
import "./Section4.css";

function Section4() {
  return (
    <div className="sectionFour" id="about">
      <div className="sectionFourCont">
        <h2 className="sectionFourH2"> About Company</h2>
        <h6 className="sectionFourH6">
          Dignissim enim sit amet venenatis urna cursus. Vitae sapien
          pellentesque habitant morbi tristique senectus et
        </h6>
        <p>
          Aenean sed adipiscing diam donec adipiscing tristique risus. At
          imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Id semper
          risus in hendrerit gravida rutrum. Vel pharetra vel turpis nunc eget
          lorem. Egestas congue quisque egestas diam{" "}
        </p>
        <button className="section-four-btn">CONTACT US</button>
      </div>
      <div className="sectionFourImg">
        <img
          className="fourImg"
          src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d0bbdfb28cbc5e918d68f21e/rrrrr-min.jpg"
          alt=""
          width="1200"
        />
        <div className="sectionFourForm">
          <h6 className="fourH6" style={{ fontWeight: "bold" }}>
            EMAIL:
          </h6>
          <h6 className="fourH6" style={{ textDecoration: "underline" }}>
            tunsiproduct@gmail.com
          </h6>
          <h6 className="fourH6" style={{ fontWeight: "bold" }}>
            PHONE:
          </h6>
          <h6 className="fourH6" style={{ textDecoration: "underline" }}>
            +216 22 218 988
          </h6>
          <h6 className="fourH6" style={{ fontWeight: "bold" }}>
            LOCATION:
          </h6>
          <h6 className="fourH6" style={{ textDecoration: "underline" }}>
            28 Jackson Blvd Ste 1020 Chicago IL 60604-2340
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Section4;
