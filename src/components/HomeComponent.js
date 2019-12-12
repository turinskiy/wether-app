import { connect } from 'react-redux';
import React from 'react';

import WeatherComponent from './WeatherComponent';
import SignOutComponent from './SignOutComponent';

class HomeComponentClass extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //
        const { isLoggedIn } = this.props.account;

        if(!isLoggedIn) {
            //Redirect user to SignUp page
        }
    }

    render() {
        const { fName, lName } = this.props.account.currentUser;

        return (
            <div>
                <h4 className="App-link">Welcome, { fName + ' ' + lName }</h4>
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