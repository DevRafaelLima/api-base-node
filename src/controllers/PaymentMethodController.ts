import { Request, Response } from "express";
import PaymentMethodService from "../services/paymentMethod";
import TPaymentMethod from "../types/paymentMethod/TPayment";

class PaymentMethodController {
    private paymentMethodService: PaymentMethodService;

    constructor() {
        this.paymentMethodService = new PaymentMethodService();
    }

    public async create(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const newPaymentMethod: Omit<TPaymentMethod, 'id'> = {
                name
            };

            await this.paymentMethodService.create(newPaymentMethod);
            res.status(201).json({ message: 'Método de pagamento criado com sucesso.' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await this.paymentMethodService.delete(id);
            res.status(201).json({ message: 'Método de pagamento deletado com sucesso.' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }

    public async selectAll(req: Request, res: Response) {
        try{
            const paymentMethods = await this.paymentMethodService.selectAll();
            res.status(200).json(paymentMethods);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

    }
}

export default new PaymentMethodController();