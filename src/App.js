import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from "styled-components";


const StyledApp = styled.div``

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledApp className = "Content">
      <Character></Character>
      </StyledApp>
    </div>
  );
}

export default App;