import React from 'react';
import './App.css';
import Quote from './components/Quote';
import styled from 'styled-components';

let Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  return (
    <Flex>
      <Quote />
    </Flex>
  );
}

export default App;
