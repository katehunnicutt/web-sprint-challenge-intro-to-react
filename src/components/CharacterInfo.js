import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CharacterInfo(props) {
    const { characters, close } = props
    //const [information, setInformation] = useState(null)

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/people/`)
    //     .then(res => {
    //       setInformation(res.data)
    //     })
    //     .catch(err => {
          
    //     })
    //   }, [characters])

return (
    <div className = 'container'>
        { <h2> {characters}</h2>}
{/*     
        <p> [characters.eye_color] </p>
        <p> {characters.mass} </p>
        <p> {characters.height} </p> */}
      <button onClick={close}> close </button>
    </div>
)
}