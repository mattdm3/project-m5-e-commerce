import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const ItemGrid = () => {

    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);
    //Once app renders 
    //Fetch the item data.
    //dispatcher -> action that will store data inside state which can be reused through all components. 
    useEffect(() => {
        fetch(`/items?page=${pageCount}&limit=9`)
            .then(res => res.json())
            .then(data => setState(data));
    }, [pageCount]);

    return (
        <>
            {state !== null &&
                <GridContainer>
                    <GridWrapper>
                        {state.map(item => {
                            return (
                                <ImageContainer>
                                    {/* <div> {item.name.split(" ")[0]} </div> */}
                                    <img src={item.imageSrc} />
                                </ImageContainer>
                            )
                        })}
                    </GridWrapper>
                    <button onClick={() => setPageCounter(pageCount += 1)}>
                        Next page
                      </button>
                </GridContainer>
            }
        </>
    )
};


const ImageContainer = styled.div`
    background: white;
    min-width: 200px; 
    min-height: 275px; 
    display: flex; 
    align-items: center;
    justify-content: center;

`

const GridContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end; 

    flex-direction: column;
    padding: 0 75px; 
    margin-top: 150px; 
    background: #FAFAFA;

`

const GridWrapper = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;



    img {
        max-width: 150px; 
    }

`

export default ItemGrid; 