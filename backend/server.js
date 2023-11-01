import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import DBconnect from './config/dbconnect.js';
const port = process.env.PORT || 5000;

DBconnect();

const app = express();

app.get('/', (req, res) => {
    res.send('API is now running ...');
});

// ALWAYS USE BACKTICK for variables
app.listen(port, () => console.log(`Node server running on port ${port}`));
