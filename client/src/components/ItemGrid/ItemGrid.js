import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from "react-router-dom";
import RenderItem from './RenderItem';

import { useDispatch } from 'react-redux';
import { addItem } from '../../actions';

const ItemGrid = () => {
// <<<<<<< cart
    const dispatch = useDispatch();

=======
// >>>>>>> master
    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);

    let [pageFinder, setPageFinder] = useState(null)


    //Once app renders 
    //Fetch the item data.
    useEffect(() => {
        //add logic to check to when page is 0 AND max pages.
        if (pageCount > 0 && pageCount <= 39) {

            fetch(`/items?page=${pageCount}&limit=9`)
                .then(res => res.json())
                .then(data =>
                    setState(data));
        }
        else {
            setPageCounter(1)
            //change for modal
            window.alert(pageCount + 'This page does not exist.')

        }
    }, [pageCount]);

    //function that will handle page directing. 
    const handlePageFinder = (e) => {
        //change hard coded page value*******
        if (e.target.value >= 1 && e.target.value <= 39) {
            setPageCounter(e.target.value)
        }
        else {
            //change for a modal.
            window.alert(pageCount + 'This page does not exist.')
        }

    }


    console.log(pageCount)




    return (
        <>
            {state !== null &&
                <GridContainer>
                    <GridWrapper>
                        {state.map((item, arrayNum) => {
                            return (
// <<<<<<< cart
//                                 <ImageContainer key={item.id} >
//                                     {/* <div> {item.name.split(" ")[0]} </div> */}
//                                     <Link to={`item/${item.id}`}> <img src={item.imageSrc} /></Link>
//                                     <TitleContainer>
//                                         <p>{`${item.name.split(" ")[1]} ${item.name.split(" ")[2]} ${item.name.split(" ")[3]} ${item.name.split(" ")[4]}`}</p>
//                                     </TitleContainer>
//                                     <DescriptionContainer
//                                         /* style={{
//                                             transform: `translateY( ${itemDescription[arrayNum].value ? "0" : "20px"})`,
//                                             opacity: itemDescription[arrayNum].value ? "1" : "0"
//                                         }}> */ >
//                                         <p> {item.category}</p>
//                                         <p>{item.price}</p>
//                                         <button
//                                             onClick={() =>
//                                                 dispatch(addItem({item}))}>
//                                             Add to cart</button>
//                                     </DescriptionContainer>
//                                 </ImageContainer>
// =======
                                <Link to={`/item/${item.id}`}>
                                    <RenderItem item={item}></RenderItem>
                                </Link>
// >>>>>>> master
                            )
                        })}
                    </GridWrapper>
                    <ButtonWrapper>
                        {pageCount > 1 && <button onClick={() => setPageCounter(pageCount -= 1)}>
                            Previous
                      </button>}
                        <button onClick={() => setPageCounter(pageCount)}>{pageCount}</button>
                        <button onClick={() => setPageCounter(pageCount + 1)}>{pageCount + 1}</button>
                        <button onClick={() => setPageCounter(pageCount + 2)}>{pageCount + 2}</button>
                        <button onClick={() => setPageCounter(pageCount += 1)}>
                            Next page
                      </button>
                    </ButtonWrapper>

                    {/* Search for for particular page? */}
                    {/* Missing Styling */}
                    <form>
                        <div>...current page: {pageCount}</div>
                        <input type='text' onChange={handlePageFinder}></input>
                    </form>


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

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
padding: 20px;

button {
    padding: 0 15px 0 15px;

    &:hover {
        cursor: pointer;
    }
}
`

export default ItemGrid;