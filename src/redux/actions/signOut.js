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