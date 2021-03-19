// Write your Character component here
import React, { useState } from "react";
import CharacterInfo from "./CharacterInfo";

export default function Character({character}) {
  //shortcut destructuring 
  const [showInfo, setShowInfo] = useState(true);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  
  return (
    <span>
      <h2>{character.name}</h2>
      {showInfo && (
        <CharacterInfo key={character.id} info={character} />
      )}
      <button id="toggleInfo" onClick={toggleInfo}>
        {showInfo ? "Hide" : "More"} Info
      </button>
    </span>
  );
}