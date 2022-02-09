import { useState, useEffect } from 'react';
import ReactFlow from 'react-flow-renderer';
import './Flowchart.css';

function Flowchart(props) {
  const [flowchart, setFlowchart] = useState([]);

  useEffect(() => {
    if (!props.workflowData.steps) {
      return;
    }
    const initialXAxisPosition = 300;

    const calculateYAxis = (index) => (index + 1) * 100;

    const steps = props.workflowData.steps.map((workflowStep, index) => {
      const { _id, description, stepOrder } = workflowStep;
      return {
        id: _id,
        type: 'default',
        data: { label: `${stepOrder}. ${description}` },
        position: { x: initialXAxisPosition, y: calculateYAxis(index) },
        style: {
          background: '#D6D5E6',
          color: '#333',
          border: '1px solid #222138',
          width: 250,
        },
      };
    });

    const getStepEdges = () => {
      const edgesArray = [];
      steps.forEach((step, index) => {
        if ((index + 1) < steps.length) {
          const previousStepId = step.id;
          const nextStepId = steps[index + 1].id;

          edgesArray.push({
            id: step.id + index,
            type: 'step',
            source: previousStepId,
            target: nextStepId,
            animated: true,
            style: { stroke: '#d50032' },
          });
        }
      });
      return edgesArray;
    };

    const stepEdges = getStepEdges();

    setFlowchart([...steps, ...stepEdges]);
  }, [props.workflowData]);

  return (
        <div className='flowchart'>
            <ReactFlow elements={flowchart}/>
        </div>
  );
}

export default Flowchart;
