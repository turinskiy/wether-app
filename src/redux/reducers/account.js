import { registerNewUser, getAllUsersString, getUserIfRegistered, isNameOcupied } from '../../services/AccountService';

const initialState = {
    currentUser: null
};

function getAllRegisteredAccounts() {
    return getAllUsersString();
}

const accountReducer = function (state = initialState, action) {
    // debugger
    switch(action.type) {
        case 'SIGN_UP': {
            const { payload } = action;
            registerNewUser(payload);

            return {
                currentUser: payload
            };
        }
        case 'SIGN_IN': {
            debugger
            const { user } = action.payload;
            const registredUser = getUserIfRegistered(user.fName, user.pass);
            const wrongCreds = (!registredUser ? true : false);
               
            return {
                currentUser: registredUser,
                wrongCreds
            };
        }
        case 'SIGN_OUT':{
            // debugger
            return {
                currentUser: null
            };
        }
        case 'CHECK_USER':
            // debugger
            const { payload } = action;
            const { currentUser } = state;

            return {
                currentUser,
                isUsernameOcupied: isNameOcupied(payload.fName)
            };
        default:
            return state;
    }
}

export default accountReducer;