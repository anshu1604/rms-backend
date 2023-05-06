import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDB } from './db/connection.js';
import roleRouter from './role/routes/index.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

connectToDB();

app.use('/api', [roleRouter]);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
})