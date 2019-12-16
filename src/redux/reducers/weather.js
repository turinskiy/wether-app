
const weatherReducer = function (state = {}, action) {
    // debugger
    switch(action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                ...action.payload
            };
        case 'GET_WEATHER_STARTED':
            return {
                ...state
            };
        case 'GET_WEATHER_SUCCESS':
            return {
                ...state,
                ...action.payload
            };
        case 'GET_WEATHER_FAILURE':
            return {
                ...state,
                ...action.payload
            };
        case 'CLEAR':
            return {
                
            };
        default:
            return state;
    }
}

export default weatherReducer;