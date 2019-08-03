"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countryCode_1 = require("./assets/countryCode");
var generateResponse = function (status, instance, msg) {
    return {
        status: status,
        instance: instance,
        msg: msg
    };
};
exports.getTelephoneInfo = function (country) {
    return countryCode_1.countryCode.find(function (x) { return x.name === country; });
};
