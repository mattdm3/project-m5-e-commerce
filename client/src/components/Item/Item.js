import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from "react-router-dom"

import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions';
// import { itemsReducer } from '../../reducers/items-reducer';
import { isInCartSelector } from '../../reducers/cart-reducer';

const Item = () => {
    const [itemInfo, setItemInfo] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const inCart = useSelector(state => isInCartSelector(state.cartState, itemInfo ? itemInfo.id : undefined));

    const dispatch = useDispatch();

    const { id } = useParams();


    console.log('INSIDE ITEM')

    console.log(itemInfo)

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
            // <<<<<<< searchBar-2-manny
            .then(data => {
                setItemInfo(data);
                setLoaded(true);
            })
    }, [id]);

    if (!loaded) {
        return null
    }

    return (<React.Fragment>
        {itemInfo !== null ?
            <div>
                Item Details
                <div><img src={itemInfo.imageSrc}></img></div>
                <div>{itemInfo.name}</div>
                <div>{itemInfo.price}</div>
                <div><Link to={`/sellers/${itemInfo.companyId}`}>Click for Seller Details</Link></div>
                {!inCart && <button
                    onClick={() =>
                        dispatch(addItem(itemInfo))}>
                    Add to cart</button>}
                {inCart && <p>Already in cart</p>}
            </div> :
            // add spinner loading.
            <div>LOADING</div>}
    </React.Fragment>
    )
}


export default connect(null, { addItem })(Item); 