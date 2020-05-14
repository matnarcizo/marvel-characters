import React, { FunctionComponent } from 'react';
import Characters from './pages/characters';
import Header from './components/Header';
import './App.scss';

const App: FunctionComponent = () => (
  <div className="container">
    <Header />
    <Characters />
  </div>
);

export default App;
