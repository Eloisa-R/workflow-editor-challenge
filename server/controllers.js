const logger = require('./utils/logger');
const Workflow = require('./models');
const validateSchema = require('./utils/schemaValidator');

const getWorkflow = (req, res) => {
  const { workflowId } = req.params;
  Workflow.findById(workflowId, (error, workflow) => {
    if (error) {
      logger.log({ level: 'error', endpoint: 'getWorkflow', messsage: error });
      return res.status(500).send({ status: '500', description: 'Internal Server Error' });
    }
    return res.send(workflow);
  });
};

const updateWorkflow = (req, res) => {
  const { workflowId } = req.params;
  const workflowData = validateSchema(req.body);
  if (!workflowData) {
    return res.send({ status: '500', description: 'Incorrect schema format' });
  }
  Workflow.findByIdAndUpdate(workflowId, workflowData, (error) => {
    if (error) {
      return res.status(500).send({ status: '500', description: 'Internal Server Error' });
    }
    return res.status(200).send({ status: 200, description: 'Workflow updated' });
  });
};

module.exports = { getWorkflow, updateWorkflow };
