import { IUserService } from "./interface/IUserService";
import { UserRepository } from "../../repository/userRepository";
import { TUser } from "../../types/user";
export class UserService implements IUserService {
    async get(_id: string): Promise<TUser | null> {
        return await UserRepository.findById(_id);
    }
    async create(user: Omit<TUser, '_id' | 'createdAt' | 'updatedAt'>): Promise<void> {
        await UserRepository.create(user);
    }
}