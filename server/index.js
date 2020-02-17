const express = require('express');

const getConditions = require('./controllers/conditions');

const app = express();

app.get('/conditions', (req, res) => {
  getConditions()
    .then(conditions => {
      res.json(conditions);
    })
    .catch(err => console.log(err));
});

app.listen(5000, () => console.log('Listening on 5000'));
