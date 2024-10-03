import TAddress from "../Address";

type TCustomer = {
    id: number;
    name: string;
    email: string;
    phone: string;
    whatsapp: boolean;
    dob: string;
    address: TAddress[] | null
}

export default TCustomer;