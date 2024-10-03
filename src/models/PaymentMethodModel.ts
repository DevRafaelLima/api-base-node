import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../infra/dbMysql';
import TPaymentMethod from '../types/paymentMethod/TPayment';

class PaymentMethodModel  {
    async insert(name: string) {
        await sequelize.query(`INSERT INTO payment_method (name) VALUES ('${name}')`);
    }
    async selectAll() {
        const [results] = await sequelize.query('SELECT * FROM payment_method');
        return results;
    }
    async selectById(id: number) {
        const [results] = await sequelize.query(`SELECT * FROM payment_method WHERE id = ${id}`);
        return results;
    }
    async update(paymentMethod: TPaymentMethod) {
        await sequelize.query(`UPDATE payment_method SET name = '${paymentMethod.name}' WHERE id = ${paymentMethod.id}`);
    }
    async delete(id: number) {
        await sequelize.query(`DELETE FROM payment_method WHERE id = ${id}`);
    }
}

export default PaymentMethodModel;