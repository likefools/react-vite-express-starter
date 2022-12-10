import express from 'express';
import { remultExpress } from 'remult/remult-express';
import { api } from './api';
import { JsonDataProvider, Remult } from "remult";
import { JsonEntityFileStorage } from 'remult/server';

export const remultLocalStorage = new Remult(new JsonDataProvider(localStorage))


const app = express();
// app.use(api);

app.use(remultExpress({
    dataProvider: async () => new JsonDataProvider(new JsonEntityFileStorage('./db'))
}));
// app.listen(3002, () => console.log("Server started"));