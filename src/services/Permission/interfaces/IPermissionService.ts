import { Result } from "../../../infra/result";
import { IPermission } from "../../../types/permission/TPermission";

export interface IPermissionService {
    get(id: string): Promise<IPermission | null>;
    getAll(page: number, qtd: number): Promise<Result>;
    create(permission: Omit<IPermission, '_id'>): Promise<void>;
}