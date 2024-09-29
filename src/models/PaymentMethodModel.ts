import {DataTypes, Model} from 'sequelize';
import sequelize from '../infra/dbMysql';

class PaymentMethodModel extends Model {
  public id!: number;
  public name!: string;
}

PaymentMethodModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, 
    modelName: 'PaymentMethodModel',
    tableName: 'payment_method',
    timestamps: false,
});

export default PaymentMethodModel;