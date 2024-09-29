import mongoose, { Schema } from "mongoose";
import { TAddress } from "../types/client";

const AddressSchema: Schema<TAddress> = new mongoose.Schema({
    state: { type: String, required: true },
    city: { type: String, required: true },
    road: { type: String, required: true },
    neighborhood: { type: String },  
    number: { type: Number, required: true },
    complements: { type: String }
});

export default AddressSchema;