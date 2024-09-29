import { Request, Response } from 'express'
import ProductService from "../services/product";
import { TProduct } from '../types/product/TProduct';


class ProductController {
    private _service;

    constructor() {
        this._service = new ProductService();
    }

    async create(req: Request, res: Response) {
        try {
            const {
                nome,
                descricao,
                preco,
                categoria,
                disponivel
            } = req.body;

            const product: Omit<TProduct, '_id'> = {
                nome,
                descricao,
                preco,
                categoria,
                disponivel
            }

            await this._service.create(product);

            res.status(201).json({message: "Produto criado com sucesso!"});
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Erro ao criar produto..." });
        }
    }
}

export default new ProductController();