import React from 'react';
import './App.css';

import RegisterForm from './components/RegisterComponent';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <RegisterForm />
      </div>
    );
  }
}

export default App;
