import React from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters'
import styled from "styled-components";


const StyledApp = styled.div``

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledApp className = "Content">
      <Characters />
      </StyledApp>
    </div>
  );
}

export default App;