
const navigationReducer = (state = {}, action) => {
    // debugger
    switch(action.type) {
        case 'SHOW_SIGN_UP':
            return {
                isSignUpShown: true,
                isSignInShown: false
            };
        case 'SHOW_SIGN_IN':
            return {
                isSignUpShown: false,
                isSignInShown: true
            }
        default:
            return state;
    }
}

export default navigationReducer;