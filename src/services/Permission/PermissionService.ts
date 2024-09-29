import { Result } from "../../infra/result";
import { IPermission } from "../../types/permission/TPermission";
import { IPermissionService } from "./interfaces/IPermissionService";
import { PermissionRepository } from "../../repository/permissionRepository";


export class PermissionService implements IPermissionService {
    async get(id: string): Promise<IPermission | null> {
        return await PermissionRepository.findById(id);
    }

    async getAll(page: number, qtd: number): Promise<Result> {   
        let total = await PermissionRepository.countDocuments({});
        let data = await PermissionRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
        let result = new Result(qtd, page, total, data);
        return result;
    }

    async create(permission: Omit<IPermission, '_id'>): Promise<void> {
        await PermissionRepository.create(permission);
    }
}