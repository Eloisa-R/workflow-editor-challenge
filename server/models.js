const mongoose = require('mongoose');

const { Schema } = mongoose;

const stepSchema = new Schema({
  stepOrder: { type: Number, required: true },
  description: { type: String, required: true },
});

const workflowSchema = new Schema({
  description: { type: String, required: true },
  stepLength: { type: Number, required: true },
  steps: { type: [stepSchema], required: true },
});

module.exports = mongoose.model('Workflow', workflowSchema);
