
const initialState = {
    cartCounter: 0
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return {
                // cartCounter: this.cartCounter + 1,
                ...state,
                [action.item.id]: {
                    ...action.item,
                    quantity: 1,
                }
            }
        }

        case 'CLEAR_CART': {
            return initialState;
        }

        default:
            return state;
    }
}


// useSelector
// if no stock no add to cart
// POST to change quantity