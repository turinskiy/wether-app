export function signIn(data) {
    return {
        type: 'LOGIN',
        payload: {
            ...data,
            isLoggedIn: true
        }
    };
}