import React from "react";
import Category from "./category";
import "./section5.css";

const categories = [
  {
    id: 1,
    img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e7a8f7e6ae845cbd84231167/c72653bd-4385-55f5-27f2-b5f458e7dcc2.jpg",
    title: "CONSULTATIONS",
  },
  {
    id: 2,
    img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e7a8f7e6ae845cbd84231167/c72653bd-4385-55f5-27f2-b5f458e7dcc2.jpg",
    title: "CONSULTATIONS",
  },
  {
    id: 3,
    img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e7a8f7e6ae845cbd84231167/c72653bd-4385-55f5-27f2-b5f458e7dcc2.jpg",
    title: "CONSULTATIONS",
  },
  {
    id: 4,
    img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e7a8f7e6ae845cbd84231167/c72653bd-4385-55f5-27f2-b5f458e7dcc2.jpg",
    title: "CONSULTATIONS",
  },
  {
    id: 5,
    img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e7a8f7e6ae845cbd84231167/c72653bd-4385-55f5-27f2-b5f458e7dcc2.jpg",
    title: "CONSULTATIONS",
  },
  {
    id: 6,
    img: "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e7a8f7e6ae845cbd84231167/c72653bd-4385-55f5-27f2-b5f458e7dcc2.jpg",
    title: "CONSULTATIONS",
  },
];

const Section5 = () => {
  return (
    <div className="sectionFive" id="sectionFive">
      <div className="sectionFiveInfo">
        <h1>We'll help manage your business</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa
        </p>
      </div>

      <div className="sectionFiveCtegories">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Section5;
