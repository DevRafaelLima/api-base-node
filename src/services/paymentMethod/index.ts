import { IPaymentMethodService } from "./interface/IPaymentMethod";
import TPaymentMethod from "../../types/paymentMethod/TPayment";
import PaymentMethodModel from "../../models/PaymentMethodModel";

class PaymentMethodService implements IPaymentMethodService {
  
  private paymentMethodModel: PaymentMethodModel;
  constructor() {
    this.paymentMethodModel = new PaymentMethodModel();
  }

  async create(paymentMethod: Omit<TPaymentMethod, 'id'>): Promise<void> {
      await this.paymentMethodModel.insert(paymentMethod.name);
  }

  async delete(id: number): Promise<void> {
      await this.paymentMethodModel.delete(id);
  }

  async selectAll(): Promise<TPaymentMethod[]> {
      return await this.paymentMethodModel.selectAll() as TPaymentMethod[];
  }
}

export default PaymentMethodService;