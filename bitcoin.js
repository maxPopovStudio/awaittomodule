
/*eslint no-console: 'off'*/

var request = require('request');

const get = () => {
        var options = {
            uri: "https://blockchain.info/ticker",
            method: 'get',
            json: true
        };
        var obj = this;
        return new Promise((resolve, reject) => {
            request(options, function (err, response, body) {
                if (err) {
                    reject(err);
                } else {                    
                    resolve(body);
                }
            });
        });

    }

module.exports = { get };
