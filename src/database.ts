import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config()

const {
    pg_host,
    pg_db,
    pg_user,
    pg_password
} = process.env

const client = new Pool({
    host: pg_host,
    database: pg_db,
    user: pg_user,
    password: pg_password
})
export default client