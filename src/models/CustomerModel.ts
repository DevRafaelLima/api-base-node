import { sequelize } from '../infra/dbMysql';

/**
 * @class CustomerModel
 * @param sequelize
 */

class CustomerModel {
    async selectAll() {
        const [results] = await sequelize.query(`select * from prime_burguer.customer`);
        return results;
    }
}

export default CustomerModel;