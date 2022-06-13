import { createPool } from 'mysql2/promise';
import 'dotenv/config';

// MySQL Database Implementation (Completely Optional)
const pool = createPool({
    multipleStatements: process.env.MULTIPLE,
    connectionLimit: process.env.LIMIT,
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PW,
    database: process.env.DB,
});

export const query = (sql) => {
    return await pool.query(sql).catch(err => console.error(err));
}