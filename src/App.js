import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterInfo from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [currentCharacterName, setCurrentCharacterName] = useState(null)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    const getCharacter = () => {
      axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
          setCharacters(res.data)
        })
        .catch(err=> {

        })

    }
    getCharacter()
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openInfo = name => {
    setCurrentCharacterName(name)
  }
  const closeInfo = () => {
    setCurrentCharacterName(null)
  }

const Character = props => (
  <div className = 'character'>
    {props.info.name}
    <button onClick={() => openInfo(props.info.name)}>
      learn more
    </button>

  </div>
)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
{
  characters.map(characters => {
    return <Character key = {characters.id} info = {characters} />

    
  })
}
{
  currentCharacterName && <CharacterInfo characterName={currentCharacterName} close={closeInfo}> </CharacterInfo>
}

    </div>
  );
}

export default App;
