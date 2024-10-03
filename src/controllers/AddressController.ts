import { Request, Response } from "express";
import AddressService from "../services/Address";
import AddressResource from "../resource/AddressResource";


class AddressController {
    private AddressService: AddressService;

    constructor() {
        this.AddressService = new AddressService();
    }

    public async index(req: Request, res: Response) {
        try {
            const addresses = await this.AddressService.selectAll();
            res.status(200).json(addresses);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
}

export default new AddressController();