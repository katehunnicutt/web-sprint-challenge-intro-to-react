import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character></Character>
    </div>
  
  );
}
export default App;
