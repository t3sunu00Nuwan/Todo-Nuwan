import pkg from 'pg';
import dotenv from 'dotenv';


const environment = process.env.NODE_ENV
dotenv.config();

const { Pool } = pkg;



const openDb = () => {
    const pool = new Pool({

        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        //database: process.env.TEST_DB_NAME,
        database: process.env.NODE_ENV === 'test' ? process.env.TEST_DB_NAME : process.env.DB_NAME || 'todo',
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT || 5432,
    });
    return pool;
}


const pool = openDb();



export {pool};