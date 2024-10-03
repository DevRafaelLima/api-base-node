import { sequelize } from '../infra/dbMysql';

/**
 * @class CityModel
 * @description CityModel class
 * 
 */
class CityModel {
    async selectAll() {
        const [results] = await sequelize.query('SELECT * FROM city');
        return results;
    }
}

export default CityModel;