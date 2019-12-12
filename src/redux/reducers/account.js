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

    const findUser = (element) => element.fName === user.fName && element.pass === user.pass;

    return users.find(findUser);
}

const accountReducer = function (state = initialState, action) {

    // debugger
    switch(action.type) {
        case 'SIGN_UP': {
            // debugger
            const { payload } = action;      

            return {
                // ...state,
                users : [ ...state.users, payload ],
                currentUser: payload,
                isLoggedIn: true,
                fullName: payload.fName + ' ' + payload.lName
            };
        }
        case 'SIGN_IN':
            debugger
            const user = { fName: action.payload.fName, pass: action.payload.pass };
            const registredUser = getRegistredUser(state.users, user);
            const isLoggedIn = !registredUser ? false : true;
               
            return {
                ...state,
                isLoggedIn,
                fullName : isLoggedIn ? registredUser.fName + ' ' + registredUser.lName : '',
                currentUser: registredUser
            };
        case 'SIGN_OUT':
            return {
                ...state,
                ...action.payload,
                isLoggedIn: false,
                currentUser: null
            };
        case 'CHECK_USER':
            debugger
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