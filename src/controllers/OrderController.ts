import { Request, Response } from "express";
import OrderService from "../services/order";


class OrderController {
    private _service;

    constructor() {
        this._service = new OrderService();
    }

    async create(req: Request, res: Response) {
        try {
            res.status(201).json({message: "Pedido cadastrado com sucesso"});
            // const order = req.body;

            // await this._service.create(order);

            // res.status(201).json({message: "Pedido cadastrado com sucesso"});
        } catch (error) {
            res.status(500).json({ error });
        }

    }
}

export default new OrderController();