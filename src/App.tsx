import './App.css';
import CounterWithState from './CounterWithState';
import CounterWithSignal from './CounterWithSignal';

function App() {
  return (
    <div>
      <h1>Counter mit useState vs. Signals</h1>
      <CounterWithState />
      <CounterWithSignal />
    </div>
  );
}

export default App;
