import * as mysql2 from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
    const connection = await mysql2.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    return connection;
}

export default connectToDatabase;