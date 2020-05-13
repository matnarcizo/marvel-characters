import React, { FunctionComponent } from 'react';
import CharacterList from './js/components/CharacterList';
import Header from './js/components/Header';
import './App.scss';

const App: FunctionComponent = () => (
  <div className="container">
    <Header />
    <CharacterList />
  </div>
);

export default App;
