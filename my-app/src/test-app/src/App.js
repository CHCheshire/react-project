import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting'


function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm from the stateful class component!" />
    </div>
  );
}

export default App;
