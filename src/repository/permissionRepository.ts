import mongoose from "mongoose";
import PermissionSchema from '../models/permissionSchema';

export const PermissionRepository = mongoose.model('Permission', PermissionSchema);