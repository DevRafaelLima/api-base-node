import mongoose, { Schema } from "mongoose";
import { TClient } from "../types/client";
import AddressSchema from "./AddressSchema";

const ClientSchema: Schema<TClient> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    cpf: { type: String },
    phone: { type: String, required: true },
    dateOfBirth: { type: String },
    address: [AddressSchema]
});

export default ClientSchema;