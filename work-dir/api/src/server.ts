import 'reflect-metadata';
import express, { response } from 'express';

import './database';

const app = express();

app.get("/", (req, res) => {
    return res.json({message: "Hello world!"});
});

app.post("/", (req, res) => {
    return res.json({message: "Os dados foram salvos com sucesso!"});
});

app.listen(3000, () => console.log("It's alive! At 3000"));