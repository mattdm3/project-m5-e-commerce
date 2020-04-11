import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from "react-router-dom"

import { useDispatch } from 'react-redux';
import { addItem } from '../../actions';
import itemsReducer from '../../reducers/items-reducer';

const Item = () => {

    const dispatch = useDispatch();

    const { id } = useParams();


    console.log('INSIDE ITEM')

    //state to hold item information. 
    const [itemInfo, setItemInfo] = useState(null);
    useEffect(() => {
        //fetching from backend.
        fetch(`/items/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(res => (res.json()))
            .then(data => setItemInfo(data))
    }, []);



    return (<React.Fragment>
        {itemInfo !== null ?
            <div>
                Item Details
                <div><img src={itemInfo.imageSrc}></img></div>
                <div>{itemInfo.name}</div>
                <div>{itemInfo.price}</div>
                <div><Link to={`/sellers/${itemInfo.companyId}`}>Click for Seller Details</Link></div>
                <button
                    onClick={() =>
                        dispatch(addItem({ itemInfo }))}>
                    Add to cart</button>
            </div> :
            // add spinner loading.
            <div>LOADING</div>}
    </React.Fragment>
    )
}


export default Item; 