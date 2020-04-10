import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// ------------- COMPONENTS -------------
import Navbar from '../HomePage/Navbar'
import ItemGrid from '../HomePage/ItemGrid'
//---------------------------------------

function App() {
  

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


// /item/companies/:companyId
// item/companies
// item/:id

