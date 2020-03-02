'use strict';

const Utilities = require('./utilities');

class Geolocation {

    static getCurrentLocation() {
        const ipApiUrl = 'http://ip-api.com/json/';
        return Utilities.getRequest(ipApiUrl);
    }

    static getCityLocation(city) {
        const cityUrl = encodeURIComponent(city);
        const mapBoxurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityUrl}.json?access_token=pk.eyJ1IjoiZWxpYXN2YWxkZXoiLCJhIjoiY2s3NHc2Z3MyMDIweDNmcDh5NnV4MmJ5byJ9.FOlYAE94Nm1WFioDnFF1vg`;
        return Utilities.getRequest(mapBoxurl);
    }
}

module.exports = Geolocation;