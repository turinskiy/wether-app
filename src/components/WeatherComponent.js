import { connect } from 'react-redux';
import React from 'react';

import { getWeather } from '../redux/actions/weather';

class WeatherComponentClass extends React.Component {
    componentWillMount = () => {
        //
        this.props.onGetWeather()
    }

    render() {
        const { city, weatherDescription, temperature } = this.props.weather;

        return (
            <div>
                <h3>{ city } ({ weatherDescription }) { temperature } <sup>o</sup>F</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
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
