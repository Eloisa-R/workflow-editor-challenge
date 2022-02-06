const Workflow = require('../models');

const sampleWorkflow = new Workflow(
  {
    description: 'Pippete_Calibration_Workflow',
    stepLength: 6,
    steps: [{
      stepOrder: 1,
      description: 'Prepare balance: Place a beaker with 1000ul of distilled H20 on the balance and tare',
    }, {
      stepOrder: 2,
      description: 'Place a new pipette tip on the pipettor',
    },
    {
      stepOrder: 3,
      description: 'Aspirate and dispense 100% of the volume into the beaker',
    }, {
      stepOrder: 4,
      description: 'Record the weight in the table',
    }, {
      stepOrder: 5,
      description: 'Tare the balance',
    },
    {
      stepOrder: 6,
      description: 'Repeat steps 3 to 5 four more times',
    },
    ],
  },
);

const loadSampleData = async () => {
  const dataExists = await Workflow.findOne({ description: 'Pippete_Calibration_Workflow' });
  if (dataExists) {
    return;
  }
  sampleWorkflow.save();
};

module.exports = loadSampleData;
