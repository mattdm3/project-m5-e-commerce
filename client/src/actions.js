export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item,
});

// NOT YET WIRED
export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    itemId,
});

//NOT YET WIRED
export const updateQuantity = (itemId, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    itemId,
    newQuantity,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});



//ITEM DATA ACTIONS - PAGINATION (9 ITEMS AT A ITME)

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




//GET ALL DATA FROM DATABASE

export const requestAllDataFromDataBase = () => ({
    type: 'REQUEST_ALL_DATA',

})
export const receiveAllDataFromDataBase = (allData) => ({
    type: 'RECEIVE_ALL_DATA',
    allData

})
export const receiveAllDataFromDataBaseError = (allData) => ({
    type: 'RECEIVE_ALL_DATA_ERROR',

})