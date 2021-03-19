import React from 'react';
import './App.css';
import Characters from './components/Characters'
import styled from "styled-components";


const StyledApp = styled.div`
h1{
  color: yellow;
}
`

const App = () => {
  return (
    <div className="App">
      <StyledApp className = "Content">
      <Characters />

      <h1 className="Header">React Wars</h1>
      </StyledApp>
    </div>
  );
}

export default App;