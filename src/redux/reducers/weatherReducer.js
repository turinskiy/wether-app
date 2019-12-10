
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
                ...state,
                ...action.payload
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
        default:
            return state;
    }
}

export default weatherReducer;