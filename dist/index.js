"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countryCode_1 = require("./utils/countryCode");
var generateResponse = function (status, instance, msg) {
    return {
        status: status,
        instance: instance,
        msg: msg
    };
};
var getTelephoneInfo = function (country) {
    return countryCode_1.countryCode.find(function (x) { return x.name === country; });
};
exports.getTelephoneInfo = getTelephoneInfo;
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber(tel, code) {
        this.tel = tel;
        this.code = code ? code : '';
    }
    PhoneNumber.prototype.isValid = function (code) {
        var telCode = code ? code : this.code;
        return this.getInstance('dialCode', telCode) ? true : false;
    };
    PhoneNumber.prototype.getRegionCode = function () {
        return true;
    };
    PhoneNumber.prototype.getCountry = function () {
        return true;
    };
    PhoneNumber.prototype.getCountryCodeForRegionCode = function () {
        return true;
    };
    PhoneNumber.prototype.getRegionCodeForCountryCode = function () {
        return true;
    };
    PhoneNumber.prototype.toJSON = function () {
        return this.getInstance('dialCode', this.tel);
    };
    PhoneNumber.prototype.getInstance = function (key, value) {
        return countryCode_1.countryCode.find(function (x) { return x[key] === value; });
    };
    PhoneNumber.prototype.processPhoneNumber = function (numbers) {
        return numbers;
    };
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
