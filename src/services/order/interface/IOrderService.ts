import { IOrder } from "../../../types/order/IOrder";


export interface IOrderService {
    create(order: IOrder): Promise<void>;
}