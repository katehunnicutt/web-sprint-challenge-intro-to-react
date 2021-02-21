// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import characterInfo from './CharacterInfo'


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


const openInfo = id => {
    setCurrentCharacterName(id)
}


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
    {props.info}
    <button onClick={() => openInfo(props)}>
      learn more
    </button>
  </div>
)
return (
  <div>
    {
    characters ? (characters.map(characters => {
      return <Character key={characters.id} info={characters} />

      })
    ): null
    }
    {
  currentCharacterName && <Character characterName={currentCharacterName} close={closeInfo}/>
}
</div>
)
}
export default Character;