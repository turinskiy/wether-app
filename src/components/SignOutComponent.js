import { connect } from 'react-redux';
import React from 'react';

import { signOut } from '../redux/actions/account';
import { clearWeather } from '../redux/actions/weather';

class SignOutComponentClass extends React.Component {
    constructor(props) {
        super(props);

        // Bindings
        this.onSignOutHandler = this.onSignOutHandler.bind(this);
    }

    onSignOutHandler() {
        this.props.clearWeather();
        this.props.onSignOut();
    }

    render() {
        const { currentUser } = this.props.account;

        return (
            <div>
                { currentUser 
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
        onSignOut: () => dispatch(signOut()),
        clearWeather: () => dispatch(clearWeather())
    }
}

const SignOutComponent = connect(mapStateToProps, mapDispatchToProps)(SignOutComponentClass);
export default SignOutComponent;