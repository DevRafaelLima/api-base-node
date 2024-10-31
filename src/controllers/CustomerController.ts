import { Request, Response } from "express";
import CustomerService from "../services/Customer";
import CustomerResource from "../resource/CustomerResource";
import AddressService from "../services/Address";

class CustomerController {
    private customerService: CustomerService;
    private addressService: AddressService;
    constructor() {
        this.customerService = new CustomerService();
        this.addressService = new AddressService();
    }

    async index(req: Request, res: Response) {
        try {
            let customers = await this.customerService.selectAll();
            res.status(200).json(customers);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
}

export default new CustomerController();