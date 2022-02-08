const Workflow = require('../models');
const validateSchema = require('../utils/schemaValidator');

jest.mock('../utils/schemaValidator', () => jest.fn().mockImplementation(() => ({ validateSchema: () => 'Some value' })));
const { getWorkflow, updateWorkflow } = require('../controllers');

describe('getWorkflow', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should call Workflow.findOne', () => {
    Workflow.findOne = jest.fn();
    getWorkflow({ params: 'someParams' });
    expect(Workflow.findOne).toHaveBeenCalled();
  });
});

describe('updateWorkflow', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should call validateSchema', () => {
    Workflow.findByIdAndUpdate = jest.fn();
    updateWorkflow({ params: 'someParams' });
    expect(validateSchema).toHaveBeenCalled();
  });
});
