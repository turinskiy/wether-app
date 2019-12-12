import { connect } from 'react-redux';
import React from 'react';

import { showSignUp, showSignIn } from './redux/actions/navigation';

import SignUpForm       from './components/SignUpComponent';
import SignInForm       from './components/SignInComponent';
import WeatherComponent from './components/WeatherComponent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false, isSignUpShown: false, isSignInShown: false };

    // Bindings
    this.onShowSignUpForm = this.onShowSignUpForm.bind(this);
    this.onShowSignInForm = this.onShowSignInForm.bind(this);
  }

  onShowSignUpForm(e) {
    e.preventDefault();
    // debugger
    this.props.showSignUpForm(this.state);
  }

  onShowSignInForm(e) {
    e.preventDefault();
    // debugger
    this.props.showSignInForm(this.state);
  }

  render() {
    
    const { isLoggedIn, isSignUpShown, isSignInShown } = this.props.navigation;
    // const { isLoggedIn, isSignUpShown, isSignInShown } = this.props;
    console.log('this.props: ', this.props);

    return (
      <div className="App">
        { !isSignUpShown && !isLoggedIn ? <a href="#" onClick={ this.onShowSignUpForm } className="App-link">Go to Sign up</a> : null }
        
        { !isSignInShown && !isLoggedIn ? <a href="#" onClick={ this.onShowSignInForm } className="App-link">Go to Sign in</a> : null }
        
        <hr/>

        { isSignUpShown && !isLoggedIn && <SignUpForm /> }
        { isSignInShown && !isLoggedIn ? <SignInForm /> : '' }

        { isLoggedIn ? <WeatherComponent /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    navigation: state.navigation,
    account: state.account,
    weather: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSignUpForm: (state) => dispatch(showSignUp(state)),
    showSignInForm: (state) => dispatch(showSignIn(state)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
