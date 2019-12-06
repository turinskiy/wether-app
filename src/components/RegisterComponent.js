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
            pass: ''
        }

        // Bindings
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onSignUpClick(e) {
        e.preventDefault();

        this.props.test(this.state);
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
                <div>
                    {/* <h2>{ this.props.fullName }</h2> */}
                </div>
            </div>
        );
    }
}

// RegisterComponent.propTypes = {
//     handleSignUp: PropTypes.func.isRequired
// };

const mapStateToProps = (state, ownProps) => {
    return {
        fullName: state.register.fName + ' ' + state.register.lName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        test: (data) => dispatch(signUp(data))
    }
}

const RegisterForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterComponent);

export default RegisterForm;