const logger = require('./logger');
const Workflow = require('../models');

const validateSchema = (workflowData) => {
  const newWorkflow = new Workflow(workflowData);
  const error = newWorkflow.validateSync();
  if (error) {
    logger.log({ level: 'error', message: 'Incorrect schema format', schemaError: error });
    return null;
  }
  return newWorkflow;
};

module.exports = validateSchema;
