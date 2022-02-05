import { useState, useEffect } from 'react';
import ReactFlow from 'react-flow-renderer';

function Flowchart(props) {

    const [flowchart, setFlowchart] = useState([]);

    useEffect(() => {
       
    }, [props.workflow])

    return (
        <ReactFlow />
    )
}

export default Flowchart;