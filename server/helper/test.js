import fs from 'fs';
import path from 'path';
import { pool } from './db.js';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const { sign } = jwt;

 


const _dirname = import.meta.dirname;


// for check the db.sql file content
const initializeTestDb = () => {
    const sql= fs.readFileSync(path.resolve(_dirname, "../todo.sql"), "utf8");
    pool.query
}


//for testing insert user
const insertTestUser = (email, password) => {
    hash(password, 10, (error, hashedPassword) => {
        pool.query('insert into account (email, password) values ($1, $2)', 
            [email, hashedPassword])
        
    })
}


//for testing token
const getToken = (email) => {
    //console.log(process.env.JWT_SECRET_KEY);
    return sign({user:email}, process.env.JWT_SECRET_KEY)
}

export {initializeTestDb, insertTestUser, getToken}