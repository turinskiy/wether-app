export function signUp(state) {
    // debugger
    return {
        type: 'SIGN_UP',
        payload: {
            ...state
        }
    };
}

export function signIn(state) {
    // debugger
    return {
        type: 'SIGN_IN',
        payload: {
            ...state
        }
    };
}

export function signOut(state) {
    // debugger
    return {
        type: 'SIGN_OUT',
        payload: {
            ...state
        }
    };
}

export function checkUser(fName) {
    // debugger
    return {
        type: 'CHECK_USER',
        payload: {
            fName
        }
    };
}