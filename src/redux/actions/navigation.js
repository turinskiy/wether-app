export function showSignUp(state) {
    // debugger
    return {
        type: 'SHOW_SIGN_UP',
        payload: {
            ...state,
            isSignUpShown: true,
            isSignInShown: false
        }
    }
}

export function showSignIn(state) {
    // debugger
    return {
        type: 'SHOW_SIGN_IN',
        payload: {
            isSignUpShown: false,
            isSignInShown: true
        }
    }
}