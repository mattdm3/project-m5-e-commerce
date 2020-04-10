import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// ------------- COMPONENTS -------------
import Navbar from '../HomePage/Navbar'
import ItemGrid from '../HomePage/ItemGrid'
//---------------------------------------

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);

  return (
    <StyledContainer>
      <Navbar />
      <ItemGrid />
    </StyledContainer>
    
  )
}

//--------------------------------- STYLES ---------------------------------

const StyledContainer = styled.div`
    margin: 0 ;
    padding: 0; 
    
`

export default App;
