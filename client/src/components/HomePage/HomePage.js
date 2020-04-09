import React from 'react';
import styled from 'styled-components'
import Navbar from './Navbar'
import ItemGrid from './ItemGrid'

const HomePage = () => {
    return (
        <StyledContainer>
            <Navbar />
            <ItemGrid />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    margin: 0 ;
    padding: 0; 
    
`
export default HomePage;