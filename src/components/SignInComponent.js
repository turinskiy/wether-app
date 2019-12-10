import { connect } from 'react-redux';
import React from 'react';

import { signIn } from '../redux/actions/accountActions';

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
        const userName  = this.props.fName,
            userPass    = this.props.pass,
            login       = this.state.fName,
            password    = this.state.pass;

        if(userName.toLowerCase() === login.toLowerCase() && userPass === password) {
            this.setState({ wrongCreds: false});
            this.props.signIn({fName: userName, pass: userPass});
        }
        else {
            this.setState(
                { 
                    wrongCreds: true,
                    pass: ''
                }
            );
        }
    }

    onFieldChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        const { wrongCreds, pass, fName } = this.state;

        return (
            <div className="pad-top">
                <div>
                    <label htmlFor="fName">First name: </label>
                    <input id="fName" type="text" className="txt" value={ fName } onChange={ this.onFieldChange } />
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input id="pass" type="password" className="txt" value={ pass } onChange={ this.onFieldChange } />
                </div>
                { wrongCreds 
                    ? <div>
                        <span className="red-txt">Wrong user name or password</span>
                    </div>
                    : null
                }
                <div>
                    <button onClick={ this.onSignInClick }>Sign in</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.accountReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (data) => dispatch(signIn(data))
    }
}

const SignInForm = connect(mapStateToProps, mapDispatchToProps)(SignInComponentClass);
export default SignInForm;