import mongoose, { Schema, Document } from "mongoose";
import { IPermission } from "../types/permission/TPermission";
import PermissionSchema from "./permissionSchema";
import { TUser } from '../types/user/index';

const UserSchema: Schema<TUser> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    permissions: {
        type: [PermissionSchema],
        default: []
    }
});
// middleware to update the 'updateAt' field
UserSchema.pre<TUser>('save', function (next) {
    this.updatedAt = new Date();
    next();
})

export default UserSchema;