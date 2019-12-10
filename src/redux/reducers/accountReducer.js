
const accountReducer = function (state = {}, action) {
    // debugger
    switch(action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                ...action.payload
            };
        case 'SIGN_IN':
            return {
                ...state,
                ...action.payload
            };
        case 'SIGN_OUT': 
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default accountReducer;