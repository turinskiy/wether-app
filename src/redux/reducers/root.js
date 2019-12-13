import { combineReducers } from 'redux';

import accountReducer       from './account';
import weatherReducer       from './weatherReducer';

const rootReducer = combineReducers({
    account: accountReducer,
    weather: weatherReducer
});

export default rootReducer;