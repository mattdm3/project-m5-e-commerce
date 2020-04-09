import React from 'react';
import styled from 'styled-components'

const ItemGrid = () => {
    return (
        <GridContainer>
            <GridWrapper>
                <img src="https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_011_aldap_1-1340x7851.jpg" />
                <img src="https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_011_aldap_1-1340x7851.jpg" />
                <img src="https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_011_aldap_1-1340x7851.jpg" />
            </GridWrapper>
        </GridContainer>

    )
}

const GridContainer = styled.div`
    display: flex; 
    justify-content: flex-end; 
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
    /* margin: 0 auto;  */
    margin-right: 50px; 

    img {
        max-width: 200px; 
    }
 

`

export default ItemGrid; 