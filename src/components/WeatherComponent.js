import { connect } from 'react-redux';
import React from 'react';

import { getWeather } from '../redux/actions/weather';
import SignOutComponent from './SignOutComponent';

class WeatherComponentClass extends React.Component {
    componentWillMount = () => {
        //
        this.props.onGetWeather()
    }

    render() {
        const { city, weatherDescription, temperature, isLoggedIn, fullName} = this.props;
        return (
            <div>
                <h4 className="App-link">{ fullName }</h4>
                <h3>{ city } ({ weatherDescription }) { temperature } <sup>o</sup>F</h3>
                { isLoggedIn ? <SignOutComponent /> : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account,
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetWeather: () => { dispatch(getWeather()) }
    }
}

const WeatherComponent = connect(mapStateToProps, mapDispatchToProps)(WeatherComponentClass);

export default WeatherComponent;
