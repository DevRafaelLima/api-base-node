import mongoose from "mongoose";
import ProductSchema from "../models/productSchema";

export const ProductRepository = mongoose.model('Products', ProductSchema);