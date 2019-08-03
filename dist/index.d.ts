export declare const getTelephoneInfo: (country: string) => {
    "name": string;
    "dial_code": string;
    "code": string;
} | {
    "name": string;
    "dial_code": null;
    "code": string;
} | undefined;
