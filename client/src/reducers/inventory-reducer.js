const initialState = {};


export default function inventoryReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_STOCK": {
            const items = getItemsInCartState(action.cartState);
            let containerForInventory = {};
            items.forEach(item => {
                containerForInventory[item.id] = item.quantity;
            });
            return {
                ...state,
                ...containerForInventory,
                //when back-end gets it, dispatch clearInventoryReducer
            };
        }

        case "CLEAR_INVENTORY_REDUCER": {
            return initialState;
          }
    
        default:
            return state;
    }
}


const getItemsInCartState = (cartState) => {
    const items = { ...cartState };
    delete items.cartCounter;
    return Object.values(items);
};