// Write your Character component here
import React, { useState } from "react";
import CharacterInfo from "./CharacterInfo";
import styles from "styled-components";

const PageStyles = styles.div`
#toggleInfo {
  color: white;
  font-size: 1.3em;
  background-color: #290F13;

}
h2{
  color: #3C6058;
}
`

export default function Character({character}) {
  //shortcut destructuring 
  const [showInfo, setShowInfo] = useState(true);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  
  return (
    
    <PageStyles>
      <span>
      <h2>{character.name}</h2>
      {showInfo && (
        <CharacterInfo key={character.id} info={character} />
      )}
      <button id="toggleInfo" onClick={toggleInfo}>
        {showInfo ? "Hide" : "More"} Info
      </button>
      </span>
      </PageStyles>
    
  );
}