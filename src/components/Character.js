// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharacterInfo from './CharacterInfo'




function Character() {
const [characters, setCharacters] = useState([])
const [currentCharacterName, setCurrentCharacterName] = useState(null)

//giving the initial info
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




// displayQuestion = () => {
//   this.setState({
//       displayQuestions: !this.state.displayQuestions
//   })
// }

const closeInfo = () => {
    setCurrentCharacterName(null)
}

const Character = props => (
  <div className = 'character'>
    {props.info.name}

  </div>
)
return (
  <div>
    {
    characters ? (characters.map(character => {
      return (
      <span>
        <h2>{character.name}</h2>
  
      <CharacterInfo key={character.id} info={character} /> 
      </span>
      )

      })
    ): null
    }
    {
  currentCharacterName && <CharacterInfo characterName={currentCharacterName} close={closeInfo}/>
}

</div>
)
}
export default Character;