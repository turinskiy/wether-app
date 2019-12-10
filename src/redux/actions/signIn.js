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