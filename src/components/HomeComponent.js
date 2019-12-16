import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';

import WeatherComponent from './WeatherComponent';
import SignOutComponent from './SignOutComponent';

class HomeComponentClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props.account;
        
        if(currentUser == null) { 
            return <Redirect to="/signin" />; 
        }

        return (
            <div>
                <h4 className="App-link">Welcome, { currentUser.fName + ' ' + currentUser.lName }</h4>
                <WeatherComponent />
                <SignOutComponent />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    };
}

const HomeComponent = connect(mapStateToProps)(HomeComponentClass);

export default HomeComponent;