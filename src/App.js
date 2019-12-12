import { connect } from 'react-redux';
import React from 'react';

import { showSignUp, showSignIn } from './redux/actions/navigation';

import SignUpForm       from './components/SignUpComponent';
import SignInForm       from './components/SignInComponent';
import HomeComponent    from './components/HomeComponent';

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
    
    const { isSignUpShown, isSignInShown } = this.props.navigation;
    const { isLoggedIn } = this.props.account;

    console.log('this.props: ', this.props);

    return (
      <div className="App">
        { !isSignUpShown && !isLoggedIn 
          && <a href="#" onClick={ this.onShowSignUpForm } className="App-link">Go to Sign up</a> }
        
        { !isSignInShown && !isLoggedIn 
          && <a href="#" onClick={ this.onShowSignInForm } className="App-link">Go to Sign in</a> }
        
        <hr/>

        { isSignUpShown && !isLoggedIn 
          && <SignUpForm /> }
        { isSignInShown && !isLoggedIn 
          && <SignInForm /> }

        { isLoggedIn 
          && <HomeComponent /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger
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
