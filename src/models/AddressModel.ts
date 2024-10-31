import { sequelize } from '../infra/dbMysql';

/**
 * @class AddressModel
 * @description AddressModel class
 */

class AddressModel {
    async selectAll() {
        const [results] = await sequelize.query(`
            select 
                ad.id,
                ad.id_city as cityId,
                ad.id_customer as customerId, 
                c.name as cityName, 
                ad.road, 
                ad.neighborhood, 
                ad.number, 
                ad.complement, 
                ad.reference_point as referencePoint, 
                cus.name as nameCustomer 
            from prime_burguer.address as ad
            join prime_burguer.city as c on ad.id_city = c.id
            join prime_burguer.customer as cus on ad.id_customer = c.id         
            `);
        return results;
    }

    async selectByIdCustormer(idCustomer: number) {
        const [results]  = await sequelize.query(`
            select 
                ad.id,
                ad.id_city as cityId,
                ad.id_customer as customerId, 
                c.name as cityName, 
                ad.road, 
                ad.neighborhood, 
                ad.number, 
                ad.complement, 
                ad.reference_point as referencePoint
            from prime_burguer.address as ad
            join prime_burguer.city as c on ad.id_city = c.id
            where ad.id_customer = ${idCustomer}         
            `);

        return results;
    }
}

export default AddressModel;