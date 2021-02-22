import React, {useEffect, useState} from 'react'
import axios from 'axios'

function CharacterInfo(props) {
    const { info, close } = props

return (
    <div className = 'container'>
         
    
         <p> Eye Color: {info.eye_color} </p>
        <p> Mass: {info.mass} </p>
        <p> Height: {info.height} </p>
        <p> Hair Color: {info.hair_color} </p>
        <p> Gender: {info.gender} </p>
        <p> Birth Year: {info.birth_year} </p>


      <button onClick={close}> close </button>
    </div>
)
}

export default CharacterInfo;