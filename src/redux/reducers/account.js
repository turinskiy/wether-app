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
    if(!user || !user.fName) {
        return false;
    }

    const findUser = (element) => element.fName.toLowerCase() === user.fName.toLowerCase() && element.pass === user.pass;

    return users.find(findUser);
}

const accountReducer = function (state = initialState, action) {

    // debugger
    switch(action.type) {
        case 'SIGN_UP': {
            // debugger
            const { payload } = action;      

            return {
                users : [ ...state.users, payload ],
                currentUser: payload,
                isLoggedIn: true
            };
        }
        case 'SIGN_IN': {
            // debugger
            
            const { users } = state;
            const registredUser = getRegistredUser(users, action.payload.user);
            const isLoggedIn = (!registredUser ? false : true);
               
            return {
                // ...state,
                users,
                currentUser: registredUser,
                isLoggedIn,
                wrongCreds: !isLoggedIn
            };
        }
        case 'SIGN_OUT':{
            // debugger
            return {
                users: state.users,
                isLoggedIn: false,
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