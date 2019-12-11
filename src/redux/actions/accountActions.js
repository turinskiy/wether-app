export function signUp(state) {
    // debugger
    return {
        type: 'SIGN_UP',
        payload: {
            ...state,
            isLoggedIn: true,
            fullName: state.fName + ' ' + state.lName
        }
    };
}

export function signIn(state) {
    // debugger
    return {
        type: 'SIGN_IN',
        payload: {
            ...state,
            isLoggedIn: true,
            fullName: state.fName + ' ' + state.lName
        }
    };
}

export function signOut(state) {
    // debugger
    return {
        type: 'SIGN_OUT',
        payload: {
            ...state,
            isLoggedIn: false
        }
    }
} 