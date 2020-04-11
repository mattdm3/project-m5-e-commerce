import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom"

const Item = () => {


    const { id } = useParams();

    console.log('INSIDE ITEM')

    //state to hold item information. 
    const [itemInfo, setItemInfo] = useState(null);
    useEffect(() => {
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
            </div> :
            // add spinner loading.
            <div>LOADING</div>}
    </React.Fragment>
    )
}


export default Item; 