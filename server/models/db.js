import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// set up sequelize connection to database
const sequelize = new Sequelize(
    database, user, password, {
        host: host,
        port: port,
        dialect: 'mysql',
        logging: query => console.log(`SQL: ${query}` )
    }
);

try {
    await sequelize.authenticate();
    console.log('Connected successfully');
} catch (error) {
    console.error('Unable to connect:', error);
}

export default sequelize;