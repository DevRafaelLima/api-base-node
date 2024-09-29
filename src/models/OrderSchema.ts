import mongoose, { Schema } from "mongoose";
import ClientSchema from "./ClientSchema";
import ProductSchema from "./productSchema";

const OrderSchema = new mongoose.Schema({
  cliente_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',  // Referência ao schema de cliente
    required: true,
  },
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',  // Referência ao schema de produto
        required: true,
      },
      qtd: {
        type: Number,
        required: true,
        min: 1,
      },
      price_und: {
        type: Number,
        required: true,
      }
    }
  ],
  date_order: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pendente', 'em preparo', 'saiu para entrega', 'entregue', 'cancelado'],
    default: 'pendente',
    required: true,
  },
  payment_method: {
    type: String,
    enum: ['dinheiro', 'cartão', 'pix'],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  delivery_address: {
    street: { type: String, required: true },
    number: { type: Number, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    zip_code: { type: String, required: true }
  },
  estimated_delivery_time: {
    type: Number,
    required: true,  // Tempo estimado de entrega em minutos
  }
}, {
  timestamps: true  // Adiciona createdAt e updatedAt
});

export default OrderSchema;
