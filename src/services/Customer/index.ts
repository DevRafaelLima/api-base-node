import AddressModel from '../../models/AddressModel';
import CustomerModel from '../../models/CustomerModel';
import AddressResource from '../../resource/AddressResource';
import CustomerResource from '../../resource/CustomerResource';
import ICustomer from './interface';


class CustomerService implements ICustomer {
    private customerModel: CustomerModel;
    private addressModel: AddressModel;
    constructor() {
        this.customerModel = new CustomerModel();
        this.addressModel = new AddressModel();
    }

    async selectAll(): Promise<any> {
        let data = await this.customerModel.selectAll();
        data = await Promise.all(
            data.map(async (item: any) => {
                let address = await this.addressModel.selectByIdCustormer(item.id);
                return { ...item, address: AddressResource.index(address) };
            })
        );
        return CustomerResource.index(data);
    }
}

export default CustomerService;