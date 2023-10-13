import pg from 'pg';
const Pool = pg.Pool;
import { config } from "dotenv";

config();

export const pool = new Pool({
    "user": process.env.DB_USER,
    "host": process.env.DB_HOST,
    "database": process.env.DB_DATABASE,
    "password": process.env.DB_PASSWORD,
    "port": process.env.DB_PORT,
    "ssl": true
})

export const connectPgDB = () => {
    try {
        pool.connect(err => {
            if (err) return console.error(err);
            console.log("Connected!");
        });
    } catch (error) {
        console.log(error);
    }

}