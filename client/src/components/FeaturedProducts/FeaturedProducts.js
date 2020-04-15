import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import RenderItem from '../ItemGrid/RenderItem';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeadings, StyledStock } from "../CONSTANTS"


const FeaturedProducts = () => {

    const [featuredItemsArray, setFeaturedItemsArray] = useState([]);
    const featuredItems = useSelector(itemState => itemState.dataItems.allItems);

    const randomNum = Math.floor((Math.random()) * 348);
    const randomNum2 = Math.floor((Math.random()) * 348);
    const randomNum3 = Math.floor((Math.random()) * 348);
    const randomNum4 = Math.floor((Math.random()) * 348);

    if (featuredItems != null) {
        featuredItemsArray.push((featuredItems[randomNum]));
        featuredItemsArray.push((featuredItems[randomNum2]));
        featuredItemsArray.push((featuredItems[randomNum3]));
        featuredItemsArray.push((featuredItems[randomNum4]));
    }

    if (featuredItemsArray.length != 0) {
        console.log(featuredItemsArray)
    }



    return (
        <Wrapper>
            <PageHeadings>Featured Products</PageHeadings>
            {featuredItemsArray.length != 0 &&
                (
                    <FeaturedItems>
                        {featuredItemsArray.map(item => {
                            return (
                                <StyledLink to={`item/${item.id}`}>
                                    <RenderItem item={item}></RenderItem>
                                    {item.numInStock == 0 && <StyledStock> Out Of <br></br> Stock</StyledStock>}
                                </StyledLink>
                            )


                        })}



                    </FeaturedItems>

                )
            }
        </Wrapper>
    )
}

const StyledLink = styled(Link)`
    position: relative; 
`

const Wrapper = styled.div`
    color: #333333;  
    margin: 10px; 
`

const FeaturedItems = styled.div`
    display: flex;
    justify-content: space-between;

`

export default FeaturedProducts; 