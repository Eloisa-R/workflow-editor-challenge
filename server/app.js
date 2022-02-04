require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./utils/database');
const logger = require('./utils/logger');
const routes = require('./routes');

connectDatabase();

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.use((req, res) => {
  logger.log(req.path);
  res.status(404).send({ status: 404, description: 'Resource not found' });
});
app.listen(3000);
