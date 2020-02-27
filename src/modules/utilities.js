'use strict';

const request = require('request');

class Utilities {

    static getRequest(getUrl) {
        return new Promise((resolve, reject) => {
            request({ url: getUrl, json: true }, (error, response, body) => {
                if (error)
                    return reject(new Error(error));

                return resolve(body ? body : response);
            });
        });
    }

}

module.exports = Utilities;