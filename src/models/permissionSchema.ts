import mongoose, { Schema, Document } from 'mongoose';
import {IPermission} from '../types/permission/TPermission'


const PermissionSchema: Schema<IPermission> = new mongoose.Schema({
    resource: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    }, 
    allowed: {
        type: Boolean,
        required: true
    }
});

export default PermissionSchema;