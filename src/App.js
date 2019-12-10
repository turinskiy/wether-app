import { connect } from 'react-redux';
import React from 'react';

import RegisterForm from './components/RegisterComponent';
import LoginForm from './components/LoginComponent';
import WeatherComponent from './components/WeatherComponent';

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
            ? <LoginForm /> 
            : <WeatherComponent />
          : <RegisterForm /> }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.registerReducer
  }
}

export default connect(mapStateToProps)(App);
