import React from "react";
import styles from "styled-components";
// import axios from 'axios'

const InfoStyles = styles.div`

  color: white;


`
function CharacterInfo(props) {
  const { info } = props;

  return (
    <InfoStyles>
    <div className="container">
      <p> Eye Color: {info.eye_color} </p>
      <p> Mass: {info.mass} </p>
      <p> Height: {info.height} </p>
      <p> Hair Color: {info.hair_color} </p>
      <p> Gender: {info.gender} </p>
      <p> Birth Year: {info.birth_year} </p>
    </div>
    </InfoStyles>
  );
}

export default CharacterInfo;
