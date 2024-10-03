import TCity from "../../../types/City";


interface ICityService {
    // create(name: string): Promise<void>;
    // delete(id: number): Promise<void>;
    selectAll(): Promise<TCity[]>;
}

export default ICityService;