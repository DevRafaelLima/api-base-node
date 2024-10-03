import TCity from "../City";
import TCustomer from "../Customer";

type TAddress = {
    id: number;
    city: TCity;
    customer: Omit<TCustomer, 'address' | 'email' | 'name' | 'phone' | 'whatsapp' | 'dob' >;
    road: string;
    neighborhood: string;
    number: number;
    complement: string;
    referencePoint: string;
};

export default TAddress;