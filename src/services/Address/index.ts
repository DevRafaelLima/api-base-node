import AddressModel from '../../models/AddressModel';
import AddressResource from '../../resource/AddressResource';
import TAddress from '../../types/Address';
import IAddressService from './interface';

class AddressService implements IAddressService {
    private addressModel: AddressModel;

    constructor() {
        this.addressModel = new AddressModel();
    }

  async selectAll(): Promise<TAddress[]> {
    const data = await this.addressModel.selectAll();
    return AddressResource.index(data);
  }
}

export default AddressService;