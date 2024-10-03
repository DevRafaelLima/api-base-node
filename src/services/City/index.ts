import CityModel from "../../models/CityModel";
import TCity from "../../types/City";
import ICityService from "./interface";


class CityService implements ICityService {

    private cityModel: CityModel;

    constructor() {
        this.cityModel = new CityModel();
    }
  async selectAll(): Promise<TCity[]> {
        return await this.cityModel.selectAll() as TCity[];
  }
}

export default CityService;