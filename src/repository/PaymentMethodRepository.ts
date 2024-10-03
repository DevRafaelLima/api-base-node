import PaymentMethodModel from "../models/PaymentMethodModel";
import TPaymentMethod from "../types/paymentMethod/TPayment";

class PaymentMethodRepository {
    async findAll() {
        return await PaymentMethodModel.findAll();
    }

    async findById(id: number) {
        return await PaymentMethodModel.findByPk(id);
    }

    async create(paymentMethod: Omit<TPaymentMethod, 'id'>) {
        return await PaymentMethodModel.create(paymentMethod);
    }

    async update(paymentMethod: TPaymentMethod) {
        const { id, name } = paymentMethod;
        return await PaymentMethodModel.update({ name }, { where: { id } });
    }
}

export default PaymentMethodRepository;