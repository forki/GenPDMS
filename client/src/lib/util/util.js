/**
 * @module lib/util/util
 */


(function () {
    "use strict";

    var util = require('util');
    var elly = require('elly');

    util.numberParser = require('./numberParser.js');
    util.publishButton = require('./publishButton.js');
    util.publishTabEnter = require('./publishTabEnter.js');

    util.elly = elly;

    /**
     * Util functions
     * @property util {util} - Utility library
     */
    module.exports = util;

})();