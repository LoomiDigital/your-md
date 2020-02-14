const express = require('express');

const conditions = require('./data/conditions.json');

const app = express();

app.get('/conditions', (req, res) => res.json(conditions));

app.listen(5000, () => console.log('Listening on 5000'));
