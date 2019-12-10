import { connect } from 'react-redux';
import React from 'react';

import { signOut } from '../redux/actions/signOut';

class SignOutComponentClass extends React.Component {
    constructor(props) {
        super(props);

        // Bindings
        this.onSignOutHandler = this.onSignOutHandler.bind(this);
    }

    onSignOutHandler() {
        this.props.onSignOut();
    }

    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
            { isLoggedIn 
                ? <button onClick={ this.onSignOutHandler } >Sign out</button>
                : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        ...state.registerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch(signOut())
    }
}

const SignOutComponent = connect(mapStateToProps, mapDispatchToProps)(SignOutComponentClass);
export default SignOutComponent;