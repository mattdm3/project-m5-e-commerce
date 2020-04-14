import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RenderItem from '../ItemGrid/RenderItem';
import { Link } from "react-router-dom";
import { StyledStock } from '../CONSTANTS';


const RelatedItems = ({ itemInfo }) => {

    const [relatedItems, setRelatedItems] = useState(null)


    useEffect(() => {
        const handleRelatedItems = async () => {
            try {
                let responseRelated = await fetch(`/relatedItems/${itemInfo.category}`);
                console.log(responseRelated);
                if (responseRelated.status === 200) {
                    let items = await responseRelated.json();
                    setRelatedItems(items)

                }
                else {
                    throw Error('Fetch for related items failed.')
                }
            }
            catch (error) {
                throw Error(error);
            }
        }
        handleRelatedItems();
    }, [])

    console.log(relatedItems)

    return (
        <React.Fragment>
            <Wrapper>
                {relatedItems !== null &&
                    relatedItems.map(item => {
                        return <Link to={`/item/${item.id}`}>

                            <RenderItem item={item}></RenderItem>
                            {item.numInStock == 0 && <StyledStock> Out Of<br></br> Stock</StyledStock>
                            }

                        </Link>

                    })
                }
            </Wrapper>
        </React.Fragment>
    )

}

export default RelatedItems;

const Wrapper = styled.div`

@media only screen and (min-width: 1025px) {
    overflow: auto;
white-space: nowrap;
width: 40vw;
height: 100vh;
display: flex;

a {
    text-decoration: none;
}

}

@media only screen and (max-width: 1024px) {
    overflow-y: scroll;
    height: 50vh;

}

    `