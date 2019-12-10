import { connect } from 'react-redux';
import React from 'react';

import { signUp } from '../redux/actions/register';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // fName: '',
            lName: '',
            phone: '+38(097)-123-45-67',
            pass: '',
            isLoggedIn: false
        }

        // Bindings
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onSignUpClick(e) {
        e.preventDefault();

        this.props.signUp(this.state);
    }

    onFieldChange(e) {
        switch(e.target.id) {
            case 'fName':
                this.setState({ fName: e.target.value });
                break;
            case 'lName':
                this.setState({ lName: e.target.value });
                break;
            // case 'phone':
            //     this.setState({ phone: e.target.value });
            //     break;
            case 'pass':
                this.setState({ pass: e.target.value });
                break;
            default:
                return this.state;
        }
    }

    render() {
        const { phone } = this.state;

        return (
            <div className="pad-top">
                <div>
                    <label htmlFor="fName">First name: </label>
                    <input id="fName" type="text" className="txt" onChange={ this.onFieldChange } />
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
                    <button onClick={ this.onSignUpClick }>Sign up</button>
                </div>
            </div>
        );
    }
}

// RegisterComponent.propTypes = {
//     handleSignUp: PropTypes.func.isRequired
// };

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        ...state,
        fullName: state.registerReducer.fName + ' ' + state.registerReducer.lName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (data) => dispatch(signUp(data))
    }
}

const RegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);

export default RegisterForm;