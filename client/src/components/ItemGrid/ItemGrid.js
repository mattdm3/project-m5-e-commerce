import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const ItemGrid = () => {

    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);

    //Fetch the item data.
    useEffect(() => {


        //add logic to check to when page is 0 or max pages.
        fetch(`/items?page=${pageCount}&limit=9`)
            .then(res => res.json())
            .then(data =>
                setState(data));


    }, [pageCount]);


    return (
        <>
            {state !== null &&
                <GridContainer>
                    <GridWrapper>
                        {state.map(item => {
                            return (
                                <ImageContainer key={item.id}>
                                    {/* <div> {item.name.split(" ")[0]} </div> */}
                                    <Link to={`item/${item.id}`}> <img src={item.imageSrc} /></Link>
                                </ImageContainer>
                            )
                        })}
                    </GridWrapper>

                    <button onClick={() => setPageCounter(pageCount += 1)}>
                        Next page
                      </button>
                    <button onClick={() => setPageCounter(pageCount -= 1)}>
                        Previous
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