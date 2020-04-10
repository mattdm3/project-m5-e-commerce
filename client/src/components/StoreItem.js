import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';

const StoreItem = ({ id, name, price }) => {
    const dispatch = useDispatch();

    return (<React.Fragment>
        //COMPONENTS/STYLING IN HERE
        <button
            onClick={() =>
                dispatch(addItem({ id, name, price }))}>
            Add to cart</button>
    </React.Fragment>
    )
}

export default StoreItem;