import { IDeliveryAddress } from "../deliveryAddress/IDeliveryAddress";
import { IOrderProduct } from "../orderProduct/IOrderProduct";

export interface IOrder {
    cliente_id: string;
    products: IOrderProduct[];
    date_order: Date;
    status: 'pendente' | 'em preparo' | 'saiu para entrega' | 'entregue' | 'cancelado';
    payment_method: 'dinheiro' | 'cartão' | 'pix';
    total: number;
    delivery_address: IDeliveryAddress;
    estimated_delivery_time: number;
    createdAt?: Date;
    updatedAt?: Date;
  }