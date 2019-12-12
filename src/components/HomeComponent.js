import { connect } from 'react-redux';
import React from 'react';

import WeatherComponent from './WeatherComponent';
import SignOutComponent from './SignOutComponent';

class HomeComponentClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLoggedIn } = this.props.account;

        return (
            <div>
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