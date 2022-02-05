require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./utils/database');
const loadSampleData = require('./utils/loadSampleData');
const logger = require('./utils/logger');
const routes = require('./routes');

connectDatabase();

loadSampleData();

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.use((req, res) => {
  logger.log({ level: 'error', message: 'Not found', requestPath: req.path });
  res.status(404).send({ status: 404, description: 'Resource not found' });
});
app.listen(3000);
