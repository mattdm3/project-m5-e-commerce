export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item,
});

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    item,
});

export const updateQuantity = (item, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    item,
    newQuantity,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const updateStock = (cartState) => ({
    type: 'UPDATE_STOCK',
    cartState,
});

export const clearInventoryReducer = () => ({
    type: 'CLEAR_INVENTORY_REDUCER',
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

//USER INFO

export const receiveUserInfo = (user) => ({
    type: 'RECEIVE_USER_DATA',
    user,
})
export const requestUserInfo = () => ({
    type: 'REQUEST_USER_DATA',
})
export const receiveUserInfoError = () => ({
    type: 'RECEIVE_USER_ERROR',
})
export const logOutUser = () => ({
    type: 'LOGOUT',
})

//GET ALL COMPANIES FROM DATABASE

export const requestAllCompanies = () => ({
    type: 'REQUEST_COMPANIES',

})
export const receiveAllCompanies = (allCompanies) => ({
    type: 'RECEIVE_COMPANIES',
    allCompanies,

})
export const receiveAllCompaniesError = () => ({
    type: 'RECEIVE_COMPANIES_ERROR',

})