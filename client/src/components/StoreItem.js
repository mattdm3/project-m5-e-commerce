import { useDispatch } from 'react-redux';
import { addItem } from '../actions';

const StoreItem = ({id, name, price}) => {
    const dispatch = useDispatch();

    return (
        //COMPONENTS/STYLING IN HERE
        <button
            onClick={() =>
            dispatch(addItem({id, name, price}))}>
        Add to cart</button>
    )
}

export default StoreItem;