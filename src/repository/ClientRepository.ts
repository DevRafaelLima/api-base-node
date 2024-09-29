import mongoose from "mongoose";
import ClientSchema from "../models/ClientSchema";

export const ClientRepository = mongoose.model('Clients', ClientSchema);