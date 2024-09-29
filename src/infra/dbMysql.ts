import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('prime_burguer', 'root', 'abc123', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
});

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export {
  sequelize,
  authenticate
};
