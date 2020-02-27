'use strict';

const Utilities = require('./utilities');
const Geolocation = require('../modules/geolocation');

class Weather {

    static getWeather(lat, lon) {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9deba7b97a27fec746e776136d3364a1`;
        return Utilities.getRequest(openWeatherUrl);
    }

    static async getCurrentCityWeather() {
        const currentLocation = await Geolocation.getCurrentLocation();
        const { lat, lon } = currentLocation;
        const dailyWeather = await this.getWeather(lat, lon);
        const response = {
            'location': currentLocation,
            'weather': dailyWeather
        }
        return response;
    }



}

module.exports = Weather;