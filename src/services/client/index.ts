import { Result } from "../../infra/result";
import { TClient } from "../../types/client";;
import { ClientRepository } from "../../repository/ClientRepository";
import { IClientService } from './interface/IClientService';


export class ClientService implements IClientService {
    async getAll(page: number, qtd: number): Promise<Result> {
        const total = await ClientRepository.countDocuments({});
        const data = await ClientRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        let result = new Result(qtd, page, total, data);
        return result;
    }
    async getById(_id: string): Promise<TClient | null> {
        return await ClientRepository.findById(_id);
    }

    async create(client: Omit<TClient, "_id">): Promise<void> {
        await ClientRepository.create(client);
    }

    async update(_id: string, client: Omit<TClient, "_id">): Promise<void> {
        await ClientRepository.findByIdAndUpdate(
            _id,
            client,
            { new: false }
        )
    }

    async delete(_id: string): Promise<void> {
        await ClientRepository.deleteOne({ _id });
    }

}