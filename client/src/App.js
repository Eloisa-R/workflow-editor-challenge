import './App.css';
import Workflow from './components/Workflow/Workflow';

function App() {
  return (
    <div>
      <header className="app__header">
       <h1>Workflow Editor</h1>
      </header>
      <main><Workflow workflowType="Pippete_Calibration_Workflow"/></main>
      </div>
  );
}

export default App;
