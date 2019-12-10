import { connect } from 'react-redux';
import React from 'react';

import { signOut } from '../redux/actions/signOut';

class SignOutComponentClass extends React.Component {
    constructor(props) {
        super(props);

        // Bindings
        this.onLogOutHandler = this.onLogOutHandler.bind(this);
    }

    onLogOutHandler() {
        console.log('logged out', this.props);
        this.props.onSignOut();
    }

    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
            { isLoggedIn 
                ? <button onClick={ this.onLogOutHandler } >Log out</button>
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