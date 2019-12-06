
const register = function (state = {}, action) {
    switch(action.type) {
        case 'REGISTER':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default register;