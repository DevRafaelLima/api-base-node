import { OrderRepository } from "../../repository/orderRepository";
import { IOrder } from "../../types/order/IOrder";
import { IOrderService } from "./interface/IOrderService";



class OrderService implements IOrderService {
    async create(order: IOrder): Promise<void> {
       await OrderRepository.create(order);
    }
}


export default OrderService;