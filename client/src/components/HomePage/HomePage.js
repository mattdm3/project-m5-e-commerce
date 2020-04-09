import React from 'react';
import styled from 'styled-components'

import ItemGrid from './ItemGrid'

const HomePage = () => {
    return (
        <StyledContainer>
            <ItemGrid />
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    margin: 0 ;
    padding: 0; 
    
`
export default HomePage;