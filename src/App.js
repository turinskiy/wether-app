import { connect } from 'react-redux';
import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import SignUpForm from './components/SignUpComponent';
import SignInForm from './components/SignInComponent';
import HomeComponent from './components/HomeComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderApp() {
    return (
      <>
        <NavLink to="/signup" activeClassName="hurray">
          Sign Up
          </NavLink>
        <NavLink to="/signin" activeClassName="hurray">
          Sign In
          </NavLink>
        <hr />
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/signin" component={SignInForm} />
          {/* <Route path="/home" component={HomeComponent} /> */}
        </Switch>
      </>
    );
  }
  render() {
    const { currentUser } = this.props.account;
    console.log('this.props: ', this.props);
    //
    console.log(decodeURIComponent(document.cookie));

    return (
      <div className="App">
        { currentUser ? <HomeComponent /> : this.renderApp() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    account: state.account,
    weather: state.weather,
  }
}

export default connect(mapStateToProps)(App);
