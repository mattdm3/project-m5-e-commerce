import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom"

const Item = () => {

    const {id} = useParams(); 

    console.log(id)


    useEffect(() => {
        fetch(`/items/${id}`, {
        method: 'GET',
        // body: JSON.stringify(actualletter),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        // must be sent as STRINGIFY to the backend
        })
        .then(res => (res.json()))
        .then(data => console.log(data))
    }, [id]);


    return (
        <div>
            ITEM PAGE 
        </div>
    )
}


export default Item; 