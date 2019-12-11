import { connect } from 'react-redux';
import React from 'react';

import { signUp, checkUser } from '../redux/actions/accountActions';

class SignUpComponentClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            phone: '+38(097)-123-45-67',
            pass: '',
            isLoggedIn: false
        };

        // Bindings
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onSignUpClick(e) {
        e.preventDefault();

        this.props.signUp(this.state);
    }

    onFieldChange(e) {
        this.setState({ [e.target.id]: e.target.value });
        
        if(e.target.id === 'fName') {
            this.props.checkUser(e.target.value);
        }
    }

    render() {
        const { phone } = this.state;

        return (
            <div className="pad-top">
                <div>
                    <label htmlFor="fName" className={ this.props.isUsernameOcupied ? 'red-wrn-text' : '' }>First name: </label>
                    <input id="fName" type="text" className="txt" onInput={ this.onFieldChange } />
                </div>
                <div>
                    <label htmlFor="lName">Last name: </label>
                    <input id="lName" type="text" className="txt" onChange={ this.onFieldChange } />
                </div>
                <div>
                    <label htmlFor="phone">Phone #: </label>
                    <input id="phone" type="text" className="txt" defaultValue={ phone } readOnly={ true } disabled={ true } /*onChange={ this.onFieldChange }*/ />
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input id="pass" type="password" className="txt" onChange={ this.onFieldChange } />
                </div>
                <div>
                    <button onClick={ this.onSignUpClick } disabled={ this.props.isUsernameOcupied }>Sign Up</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        ...state.accountReducer,
        ...state.navigationReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (data) => dispatch(signUp(data)),
        checkUser: (state) => dispatch(checkUser(state))
    }
}

const SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpComponentClass);

export default SignUpForm;