const Workflow = require('../models');

const sampleWorkflow = new Workflow(
  {
    description: 'Calibration SOP Workflow',
    stepLength: 3,
    steps: [{
      stepOrder: 1,
      description: 'Prepare balance',
      subSteps: [{
        stepOrder: 1,
        description: 'Place a beaker with 1000ul of distilled H20 on the balance and tare',
      }],
    }, {
      stepOrder: 2,
      description: 'Place a new pipette tip on the pipettor',
    }, {
      stepOrder: 3,
      description: 'Weigh the pipettes at 100% volume five times',
      subSteps: [{
        stepOrder: 1,
        description: 'Aspirate and dispense 100% of the volume into the beaker',
      }, {
        stepOrder: 2,
        description: 'Record the weight in the table',
      }, {
        stepOrder: 3,
        description: 'Tare the balance',
      }],
      repeatedSubSteps: true,
      repetionType: 'loop',
      repetitionTimes: 5,
    }],
  },
);

const loadSampleData = async () => {
  const dataExists = await Workflow.findOne({ description: 'Calibration SOP Workflow' });
  if (dataExists) {
    return;
  }
  sampleWorkflow.save();
};

module.exports = loadSampleData;
