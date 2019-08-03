"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../index");
test('Should return value for vietnam', function () {
    expect(index_1.getTelephoneInfo('Vietnam')).toBe({ "code": "VN", "dialCode": "84", "name": "Vietnam" });
});
test('Should return undefined when value airbus is passed', function () {
    expect(index_1.getTelephoneInfo('airbus')).toBe(undefined);
});
