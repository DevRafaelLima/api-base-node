import { Result } from "../../../infra/result";
import { TClient } from "../../../types/client";

export interface IClientService {
    getAll(page: number, qtd: number): Promise<Result>;
    getById(_id: string): Promise<TClient | null>;
    create(client: Omit<TClient, '_id'>): Promise<void>;
    update(_id: string, client: Omit<TClient, '_id'>): Promise<void>;
    delete(_id: string): Promise<void>;
}


