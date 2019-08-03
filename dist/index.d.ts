declare const getTelephoneInfo: (country: string) => {
    "name": string;
    "dialCode": string;
    "code": string;
} | {
    "name": string;
    "dialCode": null;
    "code": string;
} | undefined;
declare class PhoneNumber {
    tel: number;
    code: string;
    constructor(tel: number, code: string);
    isValid(code?: string): boolean;
    getRegionCode(): boolean;
    getCountry(): boolean;
    getCountryCodeForRegionCode(): boolean;
    getRegionCodeForCountryCode(): boolean;
    toJSON(): {
        "name": string;
        "dialCode": string;
        "code": string;
    } | {
        "name": string;
        "dialCode": null;
        "code": string;
    } | undefined;
    private getInstance;
    private processPhoneNumber;
}
export { PhoneNumber, getTelephoneInfo };
