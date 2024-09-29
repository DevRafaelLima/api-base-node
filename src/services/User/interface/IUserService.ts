import { Result } from "../../../infra/result";
import { TUser } from "../../../types/user";    

export interface IUserService {
    get(_id: string): Promise<TUser | null>;
    create(user: Omit<TUser, '_id' | 'createdAt' | 'updatedAt'>): Promise<void>;
}