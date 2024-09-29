import { Document } from "mongoose";
import { IPermission } from "../permission/TPermission";

export type TUser = {
    _id: string;
    name: string;
    cpf: string;
    email: string;
    password: string;
    dateOfBirth?: Date;
    createdAt: Date;
    updatedAt: Date;
    permissions: IPermission[];
}
