'use-strict';

const assert = require('assert').strict;
const sandbox = require('sinon').createSandbox();
const Geolocation = require('../../src/geolocation');

const currentLocation = {
    "query": "24.48.0.1",
    "status": "success",
    "country": "Canada",
    "countryCode": "CA",
    "region": "QC",
    "regionName": "Quebec",
    "city": "Montreal",
    "zip": "H1S",
    "lat": 45.5808,
    "lon": -73.5825,
    "timezone": "America/Toronto",
    "isp": "Le Groupe Videotron Ltee",
    "org": "Videotron Ltee",
    "as": "AS5769 Videotron Telecom Ltee"
}

describe('Geolocation test', () => {
    afterEach(() => {
        sandbox.restore();
    });

    it('Should return the current ip geolocation', async () => {
        await assert.deepStrictEqual(Geolocation.prototype.getCurrentLocation(), currentLocation);
    });
});