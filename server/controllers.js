const logger = require('./utils/logger');
const Workflow = require('./models');

const getWorkflow = (req, res) => {
  const { workflowId } = req.params;
  Workflow.findById(workflowId)
    .then((workflow) => res.send(workflow))
    .catch((error) => logger.log(error));
};

const updateWorkflow = (req, res) => {
  const { workflowId } = req.params;
  const workflowData = req.body;
  Workflow.findById(workflowId)
    .then((workflow) => {
      Object.assign(workflow, workflowData);
      workflow.save();
      res.status(204).send({ status: 204, description: 'Workflow updated' });
    })
    .catch((error) => logger.log(error));
};

module.exports = { getWorkflow, updateWorkflow };
