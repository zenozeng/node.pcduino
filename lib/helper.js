var helperNative = require('./../build/Release/node_pcduino_helper');

/**
 * Set Pulse
 *
 * @param {Int} pin - Pin number
 * @param {Int} pluse - Pluse in us
 * @param {Int} period - Period in us, defaults to 20 * 1000
 * @param {Int} loops - Loop how many times, defaults to 1
 */
var setPulse = function(pin, pluse, period, loops) {
    if (typeof period === "undefined") {
        period = 20;
    }
    if (typeof loops === "undefined") {
        loops = 1;
    }
    helperNative.setPulse(pin, pluse, period, loops);
};

module.exports = {
    setPulse: setPulse
};
