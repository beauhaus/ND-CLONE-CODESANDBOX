import React, { Component } from "react";
import LearnCTA from "./LearnCTA";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 8px;
  box-shadow: 0px 10px 40px 0px rgba(7, 15, 33, 0.1);
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 13.1vh 21vh 6vh;
  text-align: center;
  &:hover {
    cursor: pointer;
    border-color: rgba(36, 72, 255, 0.5);
    transform-origin: center center;
    transform: scale(1.02);
    box-shadow: 0px 30px 40px -10px rgba(7, 15, 33, 0.13);
    /*TODO: insert transition*/
  }
  & > .title-container {
    grid-row: 1;
  }
  & h3 {
    font-size: 1.15rem;
    margin-top: 4.5vh;
    line-height: 0.7;
  }
  & .img-container {
    grid-row: 2;
    & > img {
      height: 100%;
    }
  }
  & .description-container {
    grid-row: 3;
    text-align: left;
    padding: 1vh 1.7vw;
    & p {
      line-height: 1.9;
      letter-spacing: -0.4px;
    }
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLearn: false
    };
    this.mouseOnHandler = this.mouseOnHandler.bind(this);
    this.mouseOffHandler = this.mouseOffHandler.bind(this);
  }

  mouseOnHandler() {
    this.setState(() => ({ showLearn: true }));
  }
  mouseOffHandler() {
    this.setState(() => ({ showLearn: false }));
  }

  render() {
    const { title, url, blurb } = this.props.photo;
    const { showLearn } = this.state;
    return (
      <StyledCard
        className="card"
        onMouseEnter={this.mouseOnHandler}
        onMouseLeave={this.mouseOffHandler}
      >
        <div className="title-container">
          <h3>{title}</h3>
        </div>
        <div className="img-container">
          <img src={url} alt={url} />
        </div>
        <div className="description-container">
          <p>{blurb}</p>
        </div>
        <LearnCTA show={showLearn} />
      </StyledCard>
    );
  }
}

export default Card;
