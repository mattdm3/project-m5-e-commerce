import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import RenderItem from '../ItemGrid/RenderItem';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, requestItemData, receivedItemData, receivedItemDataError } from '../../actions';
import Sidebar from '../Sidebar';
import { SideAndGrid, GridContainer, GridWrapper, PageContainer } from '../CONSTANTS'





const Category = () => {

    const dispatch = useDispatch();
    //renamed same as itemGrid. 
    const currentItems = useSelector(itemState => itemState.items);
    //state will hold list of the current categories items.
    let [pageCount, setPageCounter] = useState(1);
    // grab category from the url
    const { category } = useParams();


    useEffect(() => {

        dispatch(requestItemData())
        //hit endpoint and will return all Objects within that category.
        fetch(`/category/${category}?page=${pageCount}&limit=9`)
            .then(res => res.json())
            .then(data => dispatch(receivedItemData(data)))
            .catch(() => dispatch(receivedItemDataError()))

        //on change of the category params, this will re-fetch. 
        //try to reuse ItemGrid component?
    }, [category, pageCount])
    // <<<<<<< searchBar-2-manny


    return (
        <React.Fragment>
            <PageContainer>
                <SideAndGrid>
                    <Sidebar />
                    {currentItems.items !== null && currentItems.status === 'success' && <GridContainer>
                        <GridWrapper>
                            {currentItems.items.map(item => {
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
                </SideAndGrid>
            </PageContainer>

        </React.Fragment>

    )

}

export default Category;


