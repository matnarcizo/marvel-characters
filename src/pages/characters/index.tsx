import React, { FunctionComponent, useState, useEffect } from 'react';
import CharactersList from './CharacterList';
import { getCharactersList, getFakeCharactersList } from '../../commons/api/marvel';
import './index.scss';

const Characters: FunctionComponent = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // getCharactersList().then(setCharacters).catch(console.log);
    getFakeCharactersList().then(setCharacters).catch(console.log);
  });

  return (
    <div className="characterContainer">
      <p className="h2">Characters</p>
      <CharactersList characters={characters} />
    </div>
  );
};

export default Characters;
