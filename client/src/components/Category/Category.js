import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import RenderItem from '../ItemGrid/RenderItem';
import styled from 'styled-components';
import { Link } from "react-router-dom";




const Category = () => {

    //state will hold list of the current categories items.
    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);
    // grab category from the url
    const { category } = useParams();


    useEffect(() => {
        //hit endpoint and will return all Objects within that category.
        fetch(`/category/${category}?page=${pageCount}&limit=9`)
            .then(res => res.json()
            )
            .then(data => setState(data))
        //on change of the category params, this will re-fetch. 
        //once fetch is done --> Dispatch ?
        //try to reuse ItemGrid component?
    }, [category, pageCount])
    return (<React.Fragment>
        {state !== null && <GridContainer>
            <GridWrapper>
                {state.map(item => {
                    return <Link to={`/item/${item.id}`}>
                        <RenderItem item={item}></RenderItem>
                    </Link>

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

    </React.Fragment>

    )

}

export default Category;

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