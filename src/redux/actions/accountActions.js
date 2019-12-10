export function signUp(state) {
    debugger
    return {
        type: 'SIGN_UP',
        payload: {
            ...state,
            isRegistered: true
        }
    };
}

export function signIn(state) {
    debugger
    return {
        type: 'SIGN_IN',
        payload: {
            ...state,
            isLoggedIn: true
        }
    };
}

export function signOut(state) {
    debugger
    return {
        type: 'SIGN_OUT',
        payload: {
            ...state,
            isLoggedIn: false
        }
    }
} 