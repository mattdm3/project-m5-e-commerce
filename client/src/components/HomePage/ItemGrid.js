import React from 'react';
import styled from 'styled-components'

const ItemGrid = () => {
    return (
        <GridContainer>
            <GridWrapper>
                <div>HELLO</div>
                <div>HELLO</div>
                <div>HELLO</div>
                <div>HELLO</div>
            </GridWrapper>
        </GridContainer>

    )
}

const GridContainer = styled.div`
    display: flex; 
    justify-content: center; 
    width: 100vw; 
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 2fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
    margin: 0 auto; 
 

`

export default ItemGrid; 