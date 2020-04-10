import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from "react-router-dom";

const ItemGrid = () => {

    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);

    const [itemDescription, setItemDescription] = useState([
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false },
        { "value": false }
    ]
    );


    //Once app renders 
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
                        {state.map((item, arrayNum) => {
                            console.log(arrayNum);
                            return (
                                <ImageContainer key={item.id} >
                                    {/* <div> {item.name.split(" ")[0]} </div> */}
                                    <Link to={`item/${item.id}`}> <img src={item.imageSrc} /></Link>
                                    <TitleContainer>
                                        <p>{`${item.name.split(" ")[1]} ${item.name.split(" ")[2]} ${item.name.split(" ")[3]} ${item.name.split(" ")[4]}`}</p>
                                    </TitleContainer>
                                    <DescriptionContainer
                                        /* style={{
                                            transform: `translateY( ${itemDescription[arrayNum].value ? "0" : "20px"})`,
                                            opacity: itemDescription[arrayNum].value ? "1" : "0"
                                        }}> */ >
                                        <p> {item.category}</p>
                                        <p>{item.price}</p>
                                    </DescriptionContainer>
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

`

const ImageContainer = styled.div`
    background: white;
    min-width: 200px;
    min-height: 285px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

`

const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex; 
    justify-content: center; 
    width: 100%; 
`
// const slideUp = keyframes`
//     from {
//         transform: translateY(20px);
//         opacity: 0; 
//     }
//     to {
//         transform: translateX(0);
//         opacity: 1; 
//     }
// `

const DescriptionContainer = styled.div`
    position: absolute; 
    bottom: 0;
    left: 0px; 
    display: flex; 
    justify-content: space-between;
    width: 100%; 
    padding: 0 15px; 
    transition-duration: 600ms; 

`



export default ItemGrid; 