import { connect } from 'react-redux';
import React from 'react';

import { showSignUp, showSignIn } from './redux/actions/navigationActions';

import SignUpForm       from './components/SignUpComponent';
import SignInForm       from './components/SignInComponent';
import WeatherComponent from './components/WeatherComponent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isRegistered: false, isLoggedIn: false, isSignUpShown: false};

    // Bindings
    this.onShowSignUpForm = this.onShowSignUpForm.bind(this);
    this.onShowSignInForm = this.onShowSignInForm.bind(this);
  }

  onShowSignUpForm() {
    // debugger
    this.props.showSignUpForm(this.state);
  }

  onShowSignInForm() {
    // debugger
    this.props.showSignInForm(this.state);
  }

  render() {
    
    const { isRegistered, isLoggedIn, isSignUpShown, isSignInShown } = this.props;

    return (
      <div className="App">
        { !isSignUpShown ? <button onClick={ this.onShowSignUpForm }>Sign up</button> : null }
        
        { !isSignInShown ? <button onClick={ this.onShowSignInForm }>Sign in</button> : null }
        

        { isSignUpShown ? <SignUpForm /> : null }
        { isSignInShown ? <SignInForm /> : null }
        { isLoggedIn ? <WeatherComponent /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    ...state.accountReducer,
    ...state.weatherReducer,
    ...state.navigationReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSignUpForm: (state) => dispatch(showSignUp(state)),
    showSignInForm: (state) => dispatch(showSignIn(state)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
