'use strict';

const express = require('express');
const router = express.Router();
const Geolocation = require('../modules/geolocation');
const Weather = require('../modules/weather');

router.get('/location', async (req, res) => {
    res.send(await Geolocation.getCurrentLocation());
});

router.get('/current', async (req, res) => {
    res.send(await Weather.getCurrentCityWeather());
});

router.get('/forecast', async (req, res) => {
    res.send(await Weather.getFiveDayCurrentCityWeather());
});

module.exports = router;