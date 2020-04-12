export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item,
});

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    item,
});

//NOT YET WIRED
export const updateQuantity = (item, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    item,
    newQuantity,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

//ITEM DATA ACTIONS

export const requestItemData = () => ({
    type: 'REQUEST_ITEMS',
})

export const receivedItemData = (data) => ({
    type: 'RECEIVED_ITEMS',
    data
})

export const receivedItemDataError = () => ({
    type: 'RECEIVED_ITEMS_ERROR',
})