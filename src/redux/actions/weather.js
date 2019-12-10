import fetch from 'cross-fetch';


export const getWeather = () => {
    return (dispatch, getState) => {
        dispatch(getWetherStarted());

        const savedResponse = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}';

        if (savedResponse.length === 0) {
            //'https://samples.openweathermap.org/data/2.5/weather?q=Odessa,ua&appid=73292c7f115a49bce8e4b292bc9faec0'
            fetch('http://localhost:3001/weather')
                .then(res => res.json())
                .then(data => {
                    dispatch(getWeatherSuccess(data));
                })
                .catch(err => {
                    // debugger
                    console.error(err);
                    dispatch(getWeatherFailure(err.message))
                });
        }
        else {
            // debugger
            dispatch(getWeatherSuccess(JSON.parse(savedResponse)));
        }
    }
}


const getWetherStarted = () => ({ type: 'GET_WEATHER_STARTED' });

const getWeatherSuccess = obj => {

    const { weather, main, name } = obj;
    const descr = weather[0].description;
    const temp = main.temp;
    // debugger
    return {
    type: 'GET_WEATHER_SUCCESS', 
    payload: { 
        city: name,
        weatherDescription: descr,
        temperature: temp
    }
}
};

const getWeatherFailure = error => ({
    type: 'GET_WEATHER_FAILURE',
    payload: {
      error
    }
  });