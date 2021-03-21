import express from 'express';
const app = express();

require('dotenv').config({ path: './.env' });

/**
 * @returns {Any}
 * @param {Number} id
 */

app.get('/', async (req, res) => {
    res.json({ Hello: 'World' });
});

/**
 * @returns {Any} User data
 * @param {Number} id
 */

import { fetchuser } from './endpoints/user';

app.get('/api/user', async (req: any, res: any) => {
    res.json(await fetchuser(req.query.id));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}`);
});
