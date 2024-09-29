import mongoose, { Schema } from "mongoose";
import { TProduct } from '../types/product/TProduct'

const ProductSchema: Schema<TProduct> = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
        enum: ['hamburguer', 'bebida', 'acompanhamento'], // Pode adicionar mais categorias aqui
    },
    disponivel: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true // Adiciona os campos "createdAt" e "updatedAt"
});

export default ProductSchema;