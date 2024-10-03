import { Request, Response } from "express";
import CityService from "../services/City";

class CityController
{
    private cityService: CityService;

    constructor() {
        this.cityService = new CityService();
    }
    public async index(req: Request, res: Response) {
        try {
            const cities = await this.cityService.selectAll();
            res.status(200).json(cities);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
}

export default new CityController();