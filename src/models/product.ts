import client from '../database';

export type product = {
    id: number;
    name: string;
    price: number;
    category: string;
}

export class productStore {
    async index(): Promise<product[]> {
        try {
            const connect = await client.connect();
        const sql = 'SELECT * FROM product';
        const result = await connect.query(sql);
        connect.release();
        return result.rows;
        }
        catch(err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }
    
    async show(id:number): Promise<product[]> {
        try {
            const connect = await client.connect();
        const sql = 'SELECT * FROM product WHERE id = (1)';
        const result = await connect.query(sql, [id]);
        connect.release();
        return result.rows[0]; 
        }
        catch(err) {
            throw new Error(`Could not show this product. Error: ${err}`);
        }
    }

    async create(p: product): Promise<product[]> {
        try {
            const connect = await client.connect();
        const sql = 'INSERT INTO products (name, price, category) VALUES(IPhone,10, mobiles) RETURNING *';
        const result = await connect.query(sql, [p.name, p.price, p.category]);
        connect.release();
        return result.rows[0]; 
        }
        catch(err) {
            throw new Error(`Could not create this product. Error: ${err}`);
        }
    }
    
    async delete(id:number): Promise<product[]> {
        try {
            const connect = await client.connect();
        const sql = 'DELETE FROM products WHERE id=(1) RETURNING *';
        const result = await connect.query(sql, [id]);
        connect.release();
        return result.rows[0]; 
        }
        catch(err) {
            throw new Error(`Could not delete this product. Error: ${err}`);
        }
    }
}
