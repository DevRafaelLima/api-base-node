import { Request, Response } from "express";
import { ClientService } from "../services/client";
import { TClient, TAddress } from "../types/client";
import { clearCPF, lowerCase, upperCase, extractNumbers } from '../helpers';

class ClientController {
    private _service;

    constructor() {
        this._service = new ClientService();
    }

    async create(req: Request, res: Response) {
        try {
            const {
                name,
                email,
                cpf,
                phone,
                dateOfBirth,
                address
            } = req.body;

            let addressClient: TAddress[] = [];

            if (address) {
                addressClient = address.map((element: TAddress) => {
                    console.log(element)
                    return {
                        state: element.state ?? '',
                        city: element.city ?? '',
                        road: element.road ?? '',
                        neighborhood: element.neighborhood ?? '',
                        number: element.number ?? '',
                        complements: element.complements ?? ''
                    }
                });
            }
            console.log(addressClient)
            const client: Omit<TClient, '_id'> = {
                name: lowerCase(name),
                email: email ? upperCase(email) : '',
                cpf: cpf ? extractNumbers(cpf) : undefined,
                phone: extractNumbers(phone),
                dateOfBirth: dateOfBirth,
                address: addressClient
            }

            await this._service.create(client);
            res.status(201).json({message: "Cliente criado com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
}

export default new ClientController();