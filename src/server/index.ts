import express from 'express';
import { remultExpress } from 'remult/remult-express';
import { api } from './api';
import { JsonDataProvider } from 'remult';
import { JsonEntityFileStorage } from 'remult/server';

const app = express();
// app.use(api);

app.use(remultExpress({
    dataProvider: async () => new JsonDataProvider(new JsonEntityFileStorage('./db'))
}));
// app.listen(3002, () => console.log("Server started"));