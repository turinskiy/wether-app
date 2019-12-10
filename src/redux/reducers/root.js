import { combineReducers } from 'redux';

import accountReducer       from './accountReducer';
import weatherReducer       from './weatherReducer';
import navigationReducer    from './navigationReducer';

const rootReducer = combineReducers({
    accountReducer,
    weatherReducer,
    navigationReducer
});

export default rootReducer;