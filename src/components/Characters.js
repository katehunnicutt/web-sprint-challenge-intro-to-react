// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState([]);
  

  //giving the initial info
  useEffect(() => {
    const getCharacter = () => {
      axios
        .get(`https://swapi.dev/api/people/`)
        .then((res) => {
          setCharacters(res.data);
        })
        .catch((err) => {});
    };
    getCharacter();
  }, []);

  return (
    <div>
      {characters
        ? characters.map((character, i) => {
            return <Character character={character} key={i}/>
          })
        : null}
    </div>
  );
}
export default Characters;
