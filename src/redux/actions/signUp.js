
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