import { countryCode } from './assets/countryCode';
import ICountryCodeInterface from './assets/modal';

const generateResponse = (status: number, instance: ICountryCodeInterface , msg: string) => {
    return {
        status,
        instance,
        msg
    }
}

export const getTelephoneInfo = (country: string) => {
    return countryCode.find(x=>x.name===country);
}; 