import { connect } from 'react-redux';
import React from 'react';

import { signOut } from '../redux/actions/account';

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
        const { isLoggedIn } = this.props.account;

        return (
            <div>
            { isLoggedIn 
                && <button onClick={ this.onSignOutHandler } >Sign out</button> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        account: state.account
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignOut: () => dispatch(signOut())
    }
}

const SignOutComponent = connect(mapStateToProps, mapDispatchToProps)(SignOutComponentClass);
export default SignOutComponent;