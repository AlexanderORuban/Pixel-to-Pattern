import mysql from "mysql2/promise";
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve the project root .env path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// Create a variable to store either real or test sequelize
let sequelize;

// Skip all db set up if in test mode
if (process.env.NODE_ENV !== 'test') {

    // Check if the database exists
    const makeDb = async () => {
        const connection = await mysql.createConnection({ host, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        await connection.end();
        console.log(`Database ${database} is ready.`);
    };

    await makeDb();

    // Set up sequelize connection to database
    const sequelize = new Sequelize(database, user, password, {
            host,
            port,
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
} else {
    // Export a harmless placeholder instead of a live connection
    // Has the same shape as the rest of the code expects
    const makeFakeModel = () => ({
    sync: async () => {}, // instead of creating table, return resolved promise, do nothing
    findAll: async () => [],
    findByPk: async () => null,
    create: async () => ({ pattern_ID: 1 }),
    update: async () => [1],    // Sequelize returns [affectedRows] for update
    destroy: async () => 1,     // rows deleted
  });

  // Stub "sequelize" that has a synchronous define() returning a fake model
  sequelize = {
    define: (_name, _schema, _opts) => makeFakeModel(),
    authenticate: async () => {},
    close: async () => {},
  };
}

export default sequelize;