const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
      case 'ADD_ITEM': {
          return {
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

// getStoreItemArray is the array of objects coming from the back-end
export const getStoreItemArray = state => Object.values(state);