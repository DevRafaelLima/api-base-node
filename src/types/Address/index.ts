import TCity from "../City";

type TAddress = {
    id: number;
    city: TCity;
    road: string;
    neighborhood: string;
    number: number;
    complement: string;
    referencePoint: string;
};

export default TAddress;