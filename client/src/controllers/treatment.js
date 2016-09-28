/**
 * @module controllers/treatment
 */

/*global webix, $$, _ */

(function () {

    "use strict";

    //region --- VARIABLES ---

    var name = "controllers:treatment";

    //endregion

    //region --- HELPER FUNCTIONS ---

    //endregion

    //region --- SUBSCRIBE ---

    var subscribeToView = function (app, debug, publish) {
        var sub = _.partial(app.bus.view.subscribe, debug),
            msg = app.msg;

        // Review a treatment and update patient treatment with the result
        sub(msg.treatment.review, function (data, envelope) {
            var msg = 'Not implemented yet:</br>' +
                envelope.topic + '</br>' +
                'will add or remove orders according to protocols';

            webix.message(msg);
        });

        // Edit the treatment in the treatment edit ui
        sub(msg.treatment.edit, function (data) {
            var treatment = data.treatment,
                patient   = data.patient;

            // Let main body now that treatment ui should be shown
            publish(msg.ui.mainBody, { item: "treatment" });

            // Publish the patient treatment
            publish(msg.treatment.edit, {
                patient: patient,
                treatment: treatment
            });

            // Publish the treatment totals
            publish(msg.treatment.totals, {
                id: patient.id
            });
        });

        //
        sub(msg.ui.mainBody, function () {
            publish(msg.ui.mainBody, { item: "details" });
        });

        // If specific patient is selected, get the treatment for that patient and
        // publish the patient treatment.
        sub(msg.patient.select, function (data) {
            var post = _.partial(app.request.post, app.settings.demo),

                succ = function (resp) {
                    publish(msg.patient.treatment, {
                        treatment: resp.result.orders
                    });
                },

                fail = function (err) {
                    debug(err);
                };

            app.loading(true);
            post(succ, fail, "treatment", { id: data.patient.id });
            app.loading(false);

        });

    };

    /*
     Subscribe All
     */
    var subscribeOnce = _.once(subscribeToView);

    //endregion

    //region --- INITIALIZE ---

    var init = function (app, debug) {
        var pub = _.partial(app.bus.controller.publish, debug);
        subscribeOnce(app, debug, pub);
    };

    //endregion

    //region --- EXPORT ---

    /**
     * #### Initializes the controller
     * Create subscriptions for the controller
     *
     * @param {object} app The application namespace
     */
    exports.init = function (app) {
        var deb = app.debug(name);
        deb("init");
        init(app, deb);
    };

    //endregion

})();