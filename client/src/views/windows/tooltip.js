/**
 * module views/windows/tooltip
 */

/* global webix */

(function () {
    "use strict";

    var id = 'tooltip';

    exports.getId = function () { return id; };


    exports.init = function (app) {
        app.debug('client:' + id)('init');

        webix.ui({
            id: id,
            view: 'tooltip',
            template: '#text#'
        });
    };

})();