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

function signInUser(users, user) {
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
            const { fName, lName, phone, pass } = action.payload;
            const user = { fName, lName, phone, pass };
            state.users.push(user);
            state.currentUser = user;

            return {
                ...state,
                ...action.payload,
                isLoggedIn: true,
                fullName: user.fName + ' ' + user.lName
            };
        }
        case 'SIGN_IN':
            debugger
            const user = { fName: action.payload.fName, pass: action.payload.pass },
                loggedInUser = signInUser(state.users, user),
                isLoggedIn = !loggedInUser ? false : true,
                fullName = isLoggedIn ? loggedInUser.fName + ' ' + loggedInUser.lName : '';
            return {
                ...state,
                isLoggedIn,
                fullName,
                currentUser: loggedInUser
            };
        case 'SIGN_OUT':
            return {
                ...state,
                ...action.payload,
                isLoggedIn: false,
                currentUser: null
            };
        case 'CHECK_USER':
            // debugger
            const flag = isNameOcupied(state.users, action.payload.fName);
            return {
                ...state,
                isUsernameOcupied: flag
            };
        default:
            return state;
    }
}

export default accountReducer;