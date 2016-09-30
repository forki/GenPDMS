/**
 * @file
 */

(function () {
    "use strict";

    /**
     * # Contains application messages
     * ### Each message fulfils a use case.
     * @namespace msg
     */
    module.exports = {
        /**
         * # Server messages
         *
         * - Accept a request to get something from the server
         * - Return the server result either as a success or a failure
         *
         * @memberof msg
         * @type object
         */
        server: {
            /**
             * ### Request something from the server
             * Typically issued from a controller
             *
             * #### controller *send*: { act: string, qry: object }
             * - act: the server side action to take to fulfill the request
             * - qry: the query object to use with the action
             *
             * #### server *receive*: { act: string, qry: object }
             * The server propagates the request to the real server
             *
             * @alias server.request
             * @memberof! msg#
             * @member server.request
             * @type string
             */
            request: "server.request",

            /**
             * ### Return a success message if server succeeded
             *
             * #### server *send*: { succ: bool, inf: array, warn: array, errs: array, result: object }
             * Sends a message with the action string appended to "server.success"
             * with the response object.
             * 
             * Note that if the server runs into errors it can still send a valid
             * response back if those errors where caught. The result will be null or 
             * an empty object the succ bool will be false. 
             *
             * @alias server.request
             * @memberof! msg#
             * @member server.request
             * @type string
             */
            success: "server.success",
            
            /**
             * ### Return a failure message if server ran into an error
             *
             * #### server *send*: { err }
             * Sends a message with the action string appended to "server.fail"
             * with the error object
             *
             * @alias server.request
             * @memberof! msg#
             * @member server.request
             * @type string
             */
            fail: "server.fail"
        },
        alert: {
            // show alert with data: { title, text, type, length }, type can be
            // alert-error, alert-warning or alert-info
            // length is the maximum length of the text and will be abbreviated
            // otherwise
            show: "alert.show",
            // alert ok is clicked, data {}
            ok: "alert.ok"
        },
        sideMenu: {
            // show the side menu, data {}
            show: "sideMenu.show",
            // item in side menu is selected, data: { item, trg }
            item: "sideMenu.item"
        },
        ui: {
            // ui is ready to be used, data: {}
            ready: "ui.ready",
            // let the ui show a particular mainBody, data: { item: 'body' }
            mainBody: "ui.mainBody",
            // let the ui show a detailsBody, data: { item: 'body' }
            detailsBody: "ui.detailsBody",
            // let the ui show the patient details list, data: { item: 'list' }
            patientList: "ui.patientList",
            // let the ui switch between main body and rule editor, data: { editor: true/false }
            ruleEditor: "ui.ruleEditor",
            // show a tooltip data: { tooltip: true/false, clientX, clientY, item, text }
            tooltip: "ui.tooltip"
        },
        status: {
            text: "status.text"
        },
        indication: {
            add: "indication.add"
        },
        /**
         * # Patient messages
         * Messages that fulfil patient use cases:
         *
         * - Get patients
         * - Select patient
         * - Update patient
         * - Create patient
         * - Save patient
         *
         * @memberof msg
         * @type object
         */
        patient: {
            /**
             * ### Get patient(-s)
             * The message *patient.get* handles the retrieval and display of patients.
             *
             * #### patient list view *send*: { filter: object }
             * - Ask for patients filtered by filter object.
             * If filter is undefined, all patients are returned.
             *
             * #### patient controller *receive*: {filter: object }
             * - Retrieve request for patients. Send a request
             * to the server to get the patients.
             *
             * #### patient controller *send*: { patients: array }
             * - Publish the list of retrieved patients.
             *
             * #### patient list view receive { patients: array }
             * - Get the list of patients and display the patient list.
             * - Make sure that no patient is selected
             * 
             * #### patient details form *receive*: { patients: array }
             * - clear the patient details form.
             * - Disable edit, savw and cancel buttons
             *
             * #### patient details component *receive* : { patients: array }
             * - Disable treatment and indication toolbar
             *
             * #### patient treatment list *receive*: { patients: array }
             * - clear the treatment list
             *
             * #### patient indication list *receive*: { patients: array }
             * - clear the indication list
             *
             * @alias patient.get
             * @memberof! msg#
             * @member patient.get
             * @type string
             */
            get: "patient.get",

            /**
             * ### Select a patient
             * The message *patient.select* handles selection and display of a single
             * patient from a list of patients.
             *
             * #### patient list view *send*: { patient: object }
             * - Publish the selected patient
             *
             * #### patient controller *receive*: { patient: object }
             * - Retrieve the selected patient
             *
             * #### patient controller *send*: { patient: obj }
             * - Publish the selected patient
             *
             * #### patient model *receive*: { patient: object }
             * - Set the model to the retrieved patient
             *
             * #### patient model *send*: { patient: object }
             * - Publish the selected patient
             *
             * #### patient details view *receive*: { patient: object }
             * - Load the view with the selected patient
             * - Make form readonly and disable save and cancel buttons
             * 
             * #### patient list view *receive*: { patient: object }
             * - Make sure that the patient is selected in the patient list view
             *
             * #### patient details component *receive*: { patient: object }
             * - Enable the component treatment and indication bar
             *
             * #### treatment controller *receive*: { patient: object }
             * - Get the selected patient
             * - Retrieve a list of orders for that patient from the server
             *
             * #### treatment controller *send*: { treatment: array }
             * - Send a list of orders for that patient
             *
             * #### treatment list view *receive*: { treatment: array }
             * - Load the list with the patient treatment
             *
             * #### indication controller *receive*: { patient: object }
             * - Get the selected patient
             * - Retrieve a list of orders for that patient from the server
             *
             * #### indication controller *send*: { indication: array }
             * - Send a list of orders for that patient
             *
             * #### indication list view *receive*: { indication: array }
             * - Load the list with the patient indications
             *
             * @alias patient.select
             * @memberof! msg#
             * @member patient.select
             * @type string
             */
            select: "patient.select",

            /**
             * ### Start editing a patient
             *
             * #### patient view *send* : { patient: object }
             * - Send the patient that will be edited
             *
             * #### patient controller *receive* : { patient: object }
             * - Get the patient that will be edited
             *
             * #### patient controller *send* : { patient: object }
             *
             * #### patient form *receive* : { patient: object }
             * - Enable form for editing
             * - Enable save and cancel buttons
             * - Disable new button
             *
             * #### patient details component *receive* : { patient: object }
             * - Disable indications and treatment bars
             *
             * @alias patient.edit
             * @memberof! msg#
             * @member patient.edit
             * @type string
             */
            edit: "patient.edit",

            /**
             * ### Cancel editing a patient
             * ToDo Fix cancel of new patient
             *
             * #### patient view *send* : { }
             * - Send cancel patient edit
             *
             * #### patient controller *receive* : { }
             * - Cancel patient edit
             *
             * #### patient controller *send* : { }
             * - Send cancel patient edit
             *
             * #### patient model *receive* : {}
             * - Restore patient original data
             *
             * #### patient model *send* : { patient: object }
             * - Send original patient data
             *
             * #### patient form *receive* : { patient: object }
             * - Load patient with original patient data
             * - Disable form for editing
             * - Disable save and cancel buttons
             * - Enable new button
             *
             * #### patient details component *receive* : { patient: object }
             * - Enbable indications and treatment bars
             *
             * @alias patient.cancel
             * @memberof! msg#
             * @member patient.cancel
             * @type string
             */
            cancel: "patient.cancel",

            /**
             * ### Update patient
             * ToDo Validate and enable/disable save button
             *
             * #### patient view *send* : { patient: object }
             * - Updated patient data
             *
             * #### patient controller *receive* : { patient: object }
             * - Receive updated patient data
             *
             * #### patient model *receive* : { patient: object }
             * - Update model with patient data
             *
             * #### patient model *send* : { patient: object }
             * - Updated patient data
             *
             * #### patient form *receive* : { patient: object }
             * - Updated patient data
             *
             * @alias patient.update
             * @memberof! msg#
             * @member patient.update
             * @type string
             */
            update: "patient.update",

            /**
             * ### Create a new patient
             *
             * #### patient form view *send*: { patient: object }
             * - Publish a new patient (all values empty or null)
             *
             * #### patient controller *receive*: { patient: object }
             * - Retrieve the new patient
             *
             * #### patient controller *send*: { patient: obj }
             * - Publish the new patient
             *
             * #### patient model *receive*: { patient: object }
             * - Set the model to the new patient
             * - Clear the original patient values
             *
             * #### patient model *send*: { patient: object }
             * - Publish the new patient
             *
             * #### patient details view *receive*: { patient: object }
             * - Enable form editing
             * - Disable save, edit and new buttons
             * - Enable cancel button
             *
             * #### patient list view *receive*: { patient: object }
             * - Make sure that no patient is selected in the patient list view
             *
             * #### patient details component *receive*: { patient: object }
             * - Disable the component treatment and indication bar
             *
             * #### treatment list view *receive*: { patient: object }
             * - Clear the list
             *
             * #### indication list view *receive*: { patient: object }
             * - Clear the list
             *
             * @alias patient.new
             * @memberof! msg#
             * @member patient.new
             * @type string
             */
            new: "patient.new",

            save: "patient.save",

            indications: "patient.indications",

            treatment: "patient.treatment",

            totals: "patient.totals"
        },
        treatment: {
            review: "treatment.review",
            edit: "treatment.edit",
            totals: "treatment.totals"
        }
    };

})();