import { TAddress } from "./TAddress";

export type TClient = {
    _id: string;
    name: string;
    email?: string;
    cpf?: string;
    phone: string;
    dateOfBirth?: string;
    address?: TAddress[];
}