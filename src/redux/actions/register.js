
export function signUp(data) {
    return {
        type: 'REGISTER',
        payload: {
            ...data,
            isRegistered: true
        }
    };
}