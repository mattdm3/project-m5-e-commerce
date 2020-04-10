import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from "react-router-dom";
import RenderItem from './RenderItem';

const ItemGrid = () => {
    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);





    //Once app renders 
    //Fetch the item data.
    useEffect(() => {

        //add logic to check to when page is 0 AND max pages.

        if (pageCount > 0) {

            fetch(`/items?page=${pageCount}&limit=9`)
                .then(res => res.json())
                .then(data =>
                    setState(data));
        }
        else {
            setPageCounter(1)
            console.log('PAGE DOESNT EXIST')
        }


    }, [pageCount]);



    console.log(pageCount)
    return (
        <>
            {state !== null &&
                <GridContainer>
                    <GridWrapper>
                        {state.map((item, arrayNum) => {
                            return (
                                <Link to={`/item/${item.id}`}>
                                    <RenderItem item={item}></RenderItem>
                                </Link>

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
const GridContainer = styled.div`
    /* display: flex; */
    /* justify-content: flex-end; */
    /* flex-direction: column;  */
    padding: 0 75px;
    margin-top: 120px;
    background: #FAFAFA;
    width: 100%;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(100px, 300px));
    /* grid-template-rows: repeat(3, 1fr); */
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    a {
        color: black;
    }
`

export default ItemGrid;