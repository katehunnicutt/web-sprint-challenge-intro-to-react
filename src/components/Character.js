// Write your Character component here
import React, {useState} from 'react'


export default function CharacterInfo(props) {
    const { characterName, close } = props
    const [information, setInformation] = useState(null)


return (
    <div className = 'container'>
        { <h2> {characterName} Information </h2>}
    
        <p> {characterName.gender} </p>
        <p> {characterName.mass} </p>
        <p> {characterName.height} </p>

    
    </div>
)


} 
