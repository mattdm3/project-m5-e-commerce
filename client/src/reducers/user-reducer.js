const intitialState = {
    status: 'idle',
    user: null,

};

export default function userReducer(state = intitialState, action) {
    switch (action.type) {
        case "RECEIVE_USER_DATA": {
            return {
                ...state,
                status: 'success',
                user: action.user

            }
        }
        case "REQUEST_USER_DATA": {
            return {
                ...state,
                status: 'loading',
            }
        }
        case "RECEIVE_USER_ERROR": {
            return {
                ...state,
                status: 'error',
            }
        }
        default:
            return state;
    }
}