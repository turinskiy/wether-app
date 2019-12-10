
const navigationReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SHOW_SIGN_UP':
            return {
                ...state,
                ...action.payload
            };
        case 'SHOW_SIGN_IN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default navigationReducer;