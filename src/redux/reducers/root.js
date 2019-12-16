import { combineReducers } from 'redux';

import accountReducer       from './account';
import weatherReducer       from './weather';

const rootReducer = combineReducers({
    account: accountReducer,
    weather: weatherReducer
});

export default rootReducer;