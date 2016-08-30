/**
 * @module data/data
 * Contains demo/test data
 */



(function () {
    "use strict";

    var dateDiff = function (d1, d2) {
        var days = (d1 - d2) / 1000 / 60 / 60 / 24;
        if (days < 7)   return Math.round(days);
        if (days < 30)  return Math.round(days / 7);
        if (days < 365) return Math.round(days / 30);
        return Math.round(days / 365);
    };

    var dobYears = function (yrs) {
        var dob = new Date();
        dob.setDate(dob.getDate() - 365 * yrs);
        return dob;
    };

    var bsa = function (hght, wght) {
        return Math.round(Math.sqrt((hght * wght)/3600) * 10) / 10;
    };

    /**
     * Demo/test data
     * @type {data}
     */
    exports.data =  {
        'action': {
            reqResp: [
                {
                    req: {},
                    resp: { succ: true, result: {}  }
                }
            ]
        },
        'patients': {
            reqResp: [
                {
                    req: {},
                    resp: {
                        succ: true,
                        result: {
                            patients: [
                                { id: "1", no: "1", lname: 'Cedar',     fname: "John",      dob: dobYears(1),    weight: "10",   weightUnit: "kg",   length: "1.2",  lengthUnit: "m",  bsa: bsa(120, 10), age: dateDiff(new Date(), dobYears(1)),    ageUnit: "years" },
                                { id: "2", no: "2", lname: 'Maple',     fname: "Frederick", dob: dobYears(0.01), weight: "1200", weightUnit: "gram", length: "49",   lengthUnit: "cm", bsa: bsa(49, 1.2), age: dateDiff(new Date(), dobYears(0.01)), ageUnit: "days" },
                                { id: "3", no: "3", lname: 'Damian',    fname: "Christine", dob: dobYears(0.5),  weight: "5",    weightUnit: "kg",   length: "89",   lengthUnit: "cm", bsa: bsa(89, 5),   age: dateDiff(new Date(), dobYears(0.5)),  ageUnit: "months" },
                                { id: "4", no: "4", lname: 'Underwood', fname: "Eric",      dob: dobYears(30),   weight: "70",   weightUnit: "kg",   length: "1.87", lengthUnit: "m",  bsa: bsa(187, 30), age: dateDiff(new Date(), dobYears(30)),   ageUnit: "years" }
                            ]
                        }
                    }
                }
            ]
        },
        'indications': {
            reqResp: [
                {
                    req: {},
                    resp: { succ: true, result: {
                        indications: [
                            { id: "1", indication: "pain" },
                            { id: "2", indication: "low blood pressure" },
                            { id: "3", indication: "convulsions" },
                            { id: "4", indication: "asthma" },
                            { id: "5", indication: "fever unknown origin" },
                            { id: "6", indication: "new onset diabetes" },
                            { id: "7", indication: "sedation" }
                        ]
                    }  }
                },
                {
                    req: { id: "1" }, // convulsions
                    resp: { succ: true, result: {
                        indications: [
                            { id: "3", indication: "convulsions" },
                            { id: "5", indication: "fever unknown origin" }
                        ]
                    }  }
                },
                {
                    req: { id: "2" }, // fever and low bloodpressure
                    resp: { succ: true, result: {
                        indications: [
                            { id: "1", indication: "pain" },
                            { id: "2", indication: "low blood pressure" },
                            { id: "5", indication: "fever unknown origin" },
                            { id: "7", indication: "sedation" }
                        ]
                    }  }
                },
                {
                    req: { id: "3" }, // convulsions and fever
                    resp: { succ: true, result: {
                        indications: [
                            { id: "1", indication: "pain" },
                            { id: "2", indication: "low blood pressure" },
                            { id: "3", indication: "convulsions" },
                            { id: "4", indication: "asthma" },
                            { id: "5", indication: "fever unknown origin" }
                        ]
                    }  }
                },
                {
                    req: { id: "4" }, // asthma
                    resp: { succ: true, result: {
                        indications: [
                            { id: "4", indication: "asthma" }
                        ]
                    }  }
                }
            ]
        },
        'treatment': {
            reqResp: [
                {
                    req: { id: "1" }, // convulsions 10 kg
                    resp: { succ: true, result: {
                        orders: [
                            { id: "1", order: "diazepam 5 mg rect (5 mg/kg)" },
                            { id: "2", order: "midazolam 1 mg iv (0.1 mg/kg)" }
                        ]
                    }  }
                },
                {
                    req: { id: "2" }, // fever and low bloodpressure 1200 gram
                    resp: { succ: true, result: {
                        orders: [
                            { id: "1", indication: "low blood pressure", order: "dopamin 40 mg/50 ml saline 0.8 ml/hour iv (8.3 mcg/kg/min)",        start: new Date(), stop: null, orderable: "dopamin 30 mg/50 ml",       type: "cont", route: "iv", freq: "",     qty: "",  time: "", timeUnit: "",       qtyUnit: "",   rate: 0.8, rateUnit: "ml/hour", dose: 8.9,  doseUnit: "mcg/kg/min" },
                            { id: "2", indication: "low blood pressure", order: "norepinephrine 1 mg/50 ml saline 0.5 ml/hour iv (0.14 mcg/kg/min)", start: new Date(), stop: null, orderable: "norepinephrine 1 mg/50 ml", type: "cont", route: "iv", freq: "",     qty: "",  time: "", timeUnit: "",       qtyUnit: "",   rate: 0.5, rateUnit: "ml/hour", dose: 0.14, doseUnit: "mcg/kg/min" },
                            { id: "3", indication: "sedation",           order: "morphine 1 mg/50 ml saline 0.5 ml/hour iv (0.2 mg/kg/day)",         start: new Date(), stop: null, orderable: "morphine 1 mg/50 ml",       type: "cont", route: "iv", freq: "",     qty: "",  time: "", timeUnit: "",       qtyUnit: "",   rate: 0.5, rateUnit: "ml/hour", dose: 0.2,  doseUnit: "mc/kg/day" },
                            { id: "4", indication: "infection",          order: "cefazoline 1 g/flac 2 dd 60 mg iv (100 mg/kg/day)",                 start: new Date(), stop: null, orderable: "cefazoline 1 g/flac",       type: "disc", route: "iv", freq: "2 dd", qty: 100, time: "", timeUnit: "",       qtyUnit: "mg", rate: "",  rateUnit: "",        dose: 100,  doseUnit: "mg/kg/day" },
                            { id: "5", indication: "infection",          order: "gentamicin 40 mg/ml 1 dd 6 mg iv (5 mg/kg/day)",                    start: new Date(), stop: null, orderable: "gentamicin 40 mg/ml",       type: "time", route: "iv", freq: "1 dd", qty: 6,   time: 15, timeUnit: "minute", qtyUnit: "mg", rate: 12,  rateUnit: "ml/hour", dose: 100,  doseUnit: "mg/kg/day" }
                        ]
                    }  }
                },
                {
                    req: { id: "3" }, // convulsions
                    resp: { succ: true, result: {
                        orders: [
                        ]
                    }  }
                },
                {
                    req: { id: "4" }, // new onset dm
                    resp: { succ: true, result: {
                        orders: [
                        ]
                    }  }
                }
            ]
        }
    };

})();

