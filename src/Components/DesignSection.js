import React from "react";
import styled from "styled-components";
import courses from "../Data/Courses";
import Card from "./Card";

const StyledDesignSection = styled.section`
  width: 100%;
  height: 100%;
  background: #272e3d;
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 1270px 1fr;
  grid-template-rows: 24vh 112vh 18vh;
  color: white;
  & .grid-top {
    font-family: "Open Sans", Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    grid-row: 1;
    grid-column: 2;
    text-align: center;
    h2 {
      font-size: 1.7rem;
      margin-top: 9vh;
    }
  }
  & .grid-mid {
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(400px, 1fr));
    justify-content: space-between;
    grid-gap: 2.4vw;
  }
  & .explore-cta {
    color: white;
    grid-column: 2;
    grid-row: 3;
    text-align: center;
    & a {
      display: inline-block;
      background: linear-gradient(90deg, #2492fc 0%, #4da8fb 100%);
      width: 20.5vw;
      border-radius: 25px;
      text-decoration: none;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 1.5vh 0.8vw;
      margin: 2vh auto;
    }
  }
`;
const DesignSection = () => {
  return (
    <StyledDesignSection className="design-section">
      <div className="grid-top">
        <h2>Design Certificates & Classes</h2>
      </div>
      <div className="card-block grid-mid">
        {/* 🔟Below is an Array looped over generating
      components */}
        {courses.slice(0, 6).map((photo, idx) => (
          <Card key={idx} photo={photo} />
        ))}
      </div>
      <div className="explore-cta">
        <a href="http://www.google.com">Explore more design classes &#x2192;</a>
      </div>
    </StyledDesignSection>
  );
};

export default DesignSection;
