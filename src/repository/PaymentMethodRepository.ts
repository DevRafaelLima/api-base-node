import PaymentMethodModel from "../models/PaymentMethodModel";


class PaymentMethodRepository {
    async findAll() {
        return await PaymentMethodModel.findAll();
    }

    async findById(id: number) {
        return await PaymentMethodModel.findByPk(id);
    }

    async create(name: string) {
        return await PaymentMethodModel.create({ name });
    }

    async update(id: number, name: string) {
        return await PaymentMethodModel.update({ name }, { where: { id } });
    }
}

export default new PaymentMethodRepository();