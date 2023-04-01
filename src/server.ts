import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import routes from './shared/routes';

createConnection()
    .then(() => {
        const app = express();

        app.use(express.json());
        app.use(routes);

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log('Error connecting to database: ', error);
    });
