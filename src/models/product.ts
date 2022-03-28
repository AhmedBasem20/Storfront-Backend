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
}