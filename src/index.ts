import { countryCode } from './utils/countryCode';
import { ICountryCodeInterface } from './utils/modal';

const generateResponse = (status: number, instance: ICountryCodeInterface , msg: string) => {
    return {
        status,
        instance,
        msg
    }
}

const getTelephoneInfo = (country: string) => {
    return countryCode.find(x=>x.name===country);
}; 

class PhoneNumber {

    public tel: number;
    public code: string;
    constructor(tel: number, code: string){
        this.tel = tel;
        this.code = code ? code: '';
    }

    public isValid(code?:string) {
        const telCode = code? code : this.code
        return this.getInstance('dialCode', telCode)? true : false
    }

    public getRegionCode(){
        return true;
    }

    public getCountry(){
        return true;
    }

    public getCountryCodeForRegionCode(){
        return true;
    }

    public getRegionCodeForCountryCode(){
        return true;
    }

    public toJSON(){
        return this.getInstance('dialCode', this.tel);
    }

    private getInstance(key:string, value: any){
        return countryCode.find((x: any) => x[key]===value)
    }

    private processPhoneNumber(numbers:any) {
        return numbers
    }
}

export { PhoneNumber,  getTelephoneInfo}
     