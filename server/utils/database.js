const mongoose = require('mongoose');
const logger = require('./logger');

const { DB_USER_NAME, DB_PASSWORD } = process.env;

const connectDatabase = async () => {
  const databaseServerUrl = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.ipto4.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(databaseServerUrl);
  } catch (error) {
    logger.log(error);
  }
};

module.exports = connectDatabase;
