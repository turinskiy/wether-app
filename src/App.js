import { connect } from 'react-redux';
import React from 'react';

import SignUpForm       from './components/SignUpComponent';
import SignInForm       from './components/SignInComponent';
import WeatherComponent from './components/WeatherComponent';
import SignOutComponent from './components/SignOutComponent';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    
    const { isRegistered, isLoggedIn } = this.props;

    return (
      <div className="App">
        { isRegistered 
          ? !isLoggedIn 
            ? <SignInForm /> 
            : <WeatherComponent />
          : <SignUpForm /> }
          <SignOutComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    ...state.accountReducer,
    ...state.weatherReducer
  }
}

export default connect(mapStateToProps)(App);
