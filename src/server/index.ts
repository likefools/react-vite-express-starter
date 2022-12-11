import express from 'express';
import { api } from './api';
import { remultExpress } from 'remult/remult-express';
import { JsonDataProvider } from 'remult';
import { JsonEntityFileStorage } from 'remult/server';



const app = express();

app.use(remultExpress({
    dataProvider: async () => new JsonDataProvider(new JsonEntityFileStorage('./db'))
}));

 

app.use(api);

app.listen(3002, () => console.log("Server started"));