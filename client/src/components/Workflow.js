import { useState, useEffect } from 'react';
import axios from 'axios';
import './Workflow.css'
import Flowchart from './Flowchart';

const workflowId = '61fea900ffeccf261074b235'

function Workflow() {
    const [workflow, setWorkflow] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getWorkflow() {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/workflow/${workflowId}`)
                setWorkflow(data);
            } catch {
                setError('Could not fetch the workflow data')
            }
        }
        getWorkflow()
    }, [])
    return (
        <section className="section">
            <h2 className="section__title">Pippete Calibration Workflow</h2>
            {error? <p className="section__error">{error}</p>: <Flowchart workflowData={workflow}/>}
        </section>
    )
}

export default Workflow;