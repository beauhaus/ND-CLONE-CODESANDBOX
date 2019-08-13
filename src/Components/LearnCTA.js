import React from "react";

import styled from "styled-components";

const StyledCTA = styled.div`
  grid-row: 4;
  text-align: right;
  position: relative;
  & .pill-arrow {
    position: absolute;
    top: 0;
    right: 1.3vw;
  }
  & a {
    display: inline-block;
    height: 37px;
    width: 14vw;
    position: relative;
    margin-right: 2.3vw;
    letter-spacing: -0.6px;
    font-size: 0.6rem;
    overflow: hidden;
    & img {
      position: absolute;
      top: 0;
      right: -6.5vw;
      height: 101%;
      animation: hover-ease 0.1s ease-in-out forwards;
    }
  }
`;

const LearnCTA = props => {
  // const {title, url, blurb} = this.props.photo;
  // const {showLearn} = this.state;
  return (
    <StyledCTA className="learn-cta-container">
      <a href="#0">
        {props.show ? (
          <img
            className="pill-learn-more"
            src="./img/learn-more.png"
            alt="learn more arrow"
          />
        ) : (
          ""
        )}
      </a>
      <img
        className="pill-arrow"
        src="./img/pill-arrow.png"
        alt="learn more arrow"
      />
    </StyledCTA>
  );
};

export default LearnCTA;
