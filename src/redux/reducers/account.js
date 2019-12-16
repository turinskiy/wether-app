import { registerNewUser, getAllUsers } from '../../services/AccountService';

const initialState = {
    users: [],
    currentUser: null
};

function isNameOcupied(users, wantedUserName) {
    if(users.length === 0) {
        return false;
    }

    const findName = (element) => element.fName === wantedUserName;

    return users.some(findName);
}

function getRegistredUser(users, user) {
    if(!user || !user.fName || !users || users.length == 0) {
        return null;
    }

    // We have some service to work with Users storage
    // we pass username, password to the service
    // The service will return response to us
    // AccountService.checkIfUserRegistered(username: string, password: string): bool

    const findUser = (element) => element.fName.toLowerCase() === user.fName.toLowerCase() && element.pass === user.pass;

    return users.find(findUser);
}

function getAllRegisteredAccounts() {
    return getAllUsers();
}

const accountReducer = function (state = initialState, action) {
    // debugger
    switch(action.type) {
        case 'SIGN_UP': {
            const { payload } = action;
            registerNewUser(payload);

            return {
                users : [ ...state.users, payload ],
                currentUser: payload
            };
        }
        case 'SIGN_IN': {
            // debugger
            
            const { users } = state;
            const registredUser = getRegistredUser(users, action.payload.user);
            const wrongCreds = (!registredUser ? true : false);
               
            return {
                // ...state,
                users,
                currentUser: registredUser,
                wrongCreds
            };
        }
        case 'SIGN_OUT':{
            // debugger
            return {
                users: state.users,
                currentUser: null
            };
        }
        case 'CHECK_USER':
            // debugger
            const { payload } = action;
            const { currentUser, users } = state;

            return {
                currentUser,
                users,
                isUsernameOcupied: isNameOcupied(users, payload.fName)
            };
        default:
            return state;
    }
}

export default accountReducer;