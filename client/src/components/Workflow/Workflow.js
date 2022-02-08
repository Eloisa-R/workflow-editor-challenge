import { useState, useEffect } from 'react';
import axios from 'axios';
import './Workflow.css';
import Flowchart from '../Flowchart/Flowchart';

function Workflow(props) {
  const [workflow, setWorkflow] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getWorkflow() {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/workflow/${props.workflowType}`);
        setWorkflow(data);
      } catch {
        setError('Could not fetch the workflow data');
      }
    }
    getWorkflow();
  }, [props.workflowType]);

  const handleClick = async () => {
    const { _id: id } = workflow;
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/workflow/${id}`, workflow);
    } catch {
      setError('Could not update the workflow data');
    }
  };

  return (
        <section className="section">
            <h2 className="section__title">Pippete Calibration Workflow</h2>
            {error ? <p className="section__error">{error}</p>
              : (<div>
                <button onClick={handleClick} className='section__content__button'>Save</button>
                <Flowchart workflowData={workflow}/>
                </div>)
          }
        </section>
  );
}

export default Workflow;
