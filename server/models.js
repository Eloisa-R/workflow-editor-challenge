const mongoose = require('mongoose');

const { Schema } = mongoose;

const stepSchema = new Schema({
  stepOrder: { type: Number, required: true },
  description: { type: String, required: true },
  subSteps: { type: [this], required: false },
  repeatedSubSteps: { type: Boolean, required: false },
  repetionType: { type: String, required: false },
  repetitionTimes: { type: Number, required: false },
});

const workflowSchema = new Schema({
  description: { type: String, required: true },
  stepLength: { type: Number, required: true },
  steps: { type: [stepSchema], required: true },
});

module.exports = mongoose.model('Workflow', workflowSchema);
