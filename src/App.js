import { connect } from 'react-redux';
import React from 'react';
import { 
  Switch, 
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import SignUpForm       from './components/SignUpComponent';
import SignInForm       from './components/SignInComponent';
import HomeComponent    from './components/HomeComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props.account;
    console.log('this.props: ', this.props);

    if (currentUser) {
      return (
        <div className="App">
          <HomeComponent />
        </div>);
    }

    return (
      <div className="App">
          <NavLink to="/signup" activeClassName="hurray">
            Sign Up
          </NavLink>
          <NavLink to="/signin" activeClassName="hurray">
            Sign In
          </NavLink>
          <hr />
          <Switch>
            <Route path="/signup" component={ SignUpForm } />
            <Route path="/signin" component={ SignInForm } />
            <Route path="/home" component={ HomeComponent } />
          </Switch>
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

export default withRouter(connect(mapStateToProps)(App));
