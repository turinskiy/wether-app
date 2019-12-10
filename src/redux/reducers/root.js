import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
    accountReducer,
    weatherReducer
});

export default rootReducer;