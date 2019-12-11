import { combineReducers } from 'redux';

import accountReducer       from './account';
import weatherReducer       from './weatherReducer';
import navigationReducer    from './navigation';

const rootReducer = combineReducers({
    account: accountReducer,
    weather: weatherReducer,
    navigation: navigationReducer
});

export default rootReducer;