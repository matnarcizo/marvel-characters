import React, { useState, useEffect } from "react";
import { getCharactersList } from '../../commons/api/marvel'

const Form = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersList().then(setCharacters).catch(console.log)
  })

  return (
    <ul>
      {
        characters.map(character => <li key={character.id}>{character.name}</li>)
      }
    </ul>
  )
};

export default Form;