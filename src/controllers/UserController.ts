import { Request, Response } from 'express';
import { UserService } from "../services/User/UserService";
import { TUser } from '../types/user';
import { clearCPF, lowerCase, upperCase } from '../helpers';


class UserController {
    private _service;

    constructor() {
        this._service = new UserService();
    }

    async create(req: Request, res: Response) {
        try {
            const {
                name,
                cpf,
                email,
                password,
                dateOfBirth,
                permissions,
            } = req.body;
    
            const user: Omit<TUser, '_id' | 'createdAt' | 'updatedAt'> = {
                name: upperCase(name),
                cpf: clearCPF(cpf),
                email: lowerCase(email),
                password,
                dateOfBirth,
                permissions
            }
            await this._service.create(user);

            res.status(201).json({message: "Usuário criado com sucesso!"});
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new UserController();