import { connect } from 'react-redux';
import React from 'react';

import { signIn } from '../redux/actions/account';

class SignInComponentClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = { wrongCreds: false, fName: '', pass: '' };

        // Bindings
        this.onSignInClick = this.onSignInClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onSignInClick() {
        // debugger
        const { fName, pass } = this.state;

        if(!fName || !pass) {
            this.setState({
                emptyFields: true
            });
            return;
        }
        this.props.signIn({ fName, pass });
    }

    onFieldChange(e) {
        // debugger
        this.setState({ 
            [e.target.id]: e.target.value,
            emptyFields: false
        });
    }

    render() {
        const { emptyFields } = this.state;
        const { wrongCreds } = this.props.account;

        return (
            <div className="pad-top">
                <div>
                    <label htmlFor="fName">First Name: </label>
                    <input id="fName" type="text" className="txt" onInput={ this.onFieldChange } />
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input id="pass" type="password" className="txt" onInput={ this.onFieldChange } />
                </div>
                { wrongCreds && <span className="red-wrn-text"><small>Wrong user name or password</small></span> }
                { emptyFields && <span className="red-wrn-text"><small>Please fill First Name and Password</small></span> }
                <div>
                    <button onClick={ this.onSignInClick }>Sign in</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {
        account: state.account
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => dispatch(signIn(user))
    }
}

const SignInForm = connect(mapStateToProps, mapDispatchToProps)(SignInComponentClass);
export default SignInForm;