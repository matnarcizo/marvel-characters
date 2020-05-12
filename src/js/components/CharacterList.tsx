import React, { useState, useEffect, FunctionComponent } from 'react';
import { getCharactersList } from '../../commons/api/marvel';
import './CharacterList.scss';

const CharacterList: FunctionComponent = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersList().then(setCharacters).catch(console.log);
  });

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
