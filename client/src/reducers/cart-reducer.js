const initialState = {
  cartCounter: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        cartCounter: state.cartCounter + 1,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }

    case "REMOVE_ITEM": {
      const newState = { ...state, cartCounter: state.cartCounter - 1 };
      delete newState[action.item.id];
      return newState
    }

    case "UPDATE_QUANTITY": {
        return {
            ...state,
            [action.item.id]: {
              ...action.item,
              quantity: action.newQuantity,
            },
        };
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

export const itemsSelector = (state) => {
  const items = { ...state };
  delete items.cartCounter;
  return Object.values(items);
};

export const isInCartSelector = (state, itemId) => {
    if (!itemId) {
        return false;
    }
    const items = { ...state };
    delete items.cartCounter;
    let products = Object.values(items);
    return products.find(product => product.id === itemId);
};


export const cartTotalSelector = (state) => {
    const items = {...state};
    delete items.cartCounter;
    let sum = Object.values(items).reduce((total, item) => {
        let parsedPrice = parseFloat(item.price.slice(1));
        total += (item.quantity * parsedPrice);
        return total;
    }, 0);
    return sum.toFixed(2);
};

// useSelector
// if no stock no add to cart
// POST to change quantity
