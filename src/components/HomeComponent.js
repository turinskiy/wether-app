import { connect } from 'react-redux';
import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import WeatherComponent from './WeatherComponent';
import SignOutComponent from './SignOutComponent';

class HomeComponentClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser } = this.props.account;
        
        if(currentUser == null) { 
            return <Redirect to="/" />; 
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

const HomeComponent = withRouter(connect(mapStateToProps)(HomeComponentClass));

export default HomeComponent;