export function signUp(state) {
    // debugger
    return {
        type: 'SIGN_UP',
        payload:  {
            fName: state.fName, 
            lName: state.lName, 
            phone: state.phone, 
            pass: state.pass
        }
    };
}

export function signIn(user) {
    // debugger
    return {
        type: 'SIGN_IN',
        payload: {
            user
        }
    };
}

export function signOut() {
    // debugger
    return {
        type: 'SIGN_OUT'
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