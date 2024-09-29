import { Request, Response } from 'express';
import { PermissionService } from "../services/Permission/PermissionService";
import { IPermission } from '../types/permission/TPermission';

class PermissionController {
    private _service;

    constructor() {
        this._service = new PermissionService();
    }

    async get(req: Request, res: Response) {
        try {
            const page = req.params.page ? parseInt(req.params.page) : 1;
            const qtd = req.params.qtd ? parseInt(req.params.qtd) : 10;
            let result = await this._service.getAll(page, qtd)

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await this._service.get(id);

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error })
        }

    }

    async create(req: Request, res: Response) {
        try {
            const { resource, action, allowed } = req.body;

            const permission: Omit<IPermission, '_id'> = {
                resource,
                action,
                allowed: Boolean(allowed)
            }
            await this._service.create(permission);

            res.status(201).json({message: "Permissão cadastrada com sucesso"});
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}


export default new PermissionController();