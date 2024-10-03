import TAddress from "../../../types/Address";


export default interface IAddress {
    selectAll(): Promise<TAddress[]>;
}