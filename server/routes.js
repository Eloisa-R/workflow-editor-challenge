const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/workflow/:workflowId', controllers.getWorkflow);

router.post('/workflow/:workflowId', controllers.updateWorkflow);

module.exports = router;
