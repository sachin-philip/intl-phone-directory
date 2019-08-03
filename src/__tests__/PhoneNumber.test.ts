import { getTelephoneInfo } from "./../index";

test('Should return value for vietnam', () => {
    expect(getTelephoneInfo('Vietnam')).toStrictEqual({"code": "VN", "dialCode": "84", "name": "Vietnam"});
  });

test('Should return undefined when value airbus is passed', () => {
    expect(getTelephoneInfo('airbus')).toBe(undefined);
  });