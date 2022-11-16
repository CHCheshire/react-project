import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './test-app/src/components/FunctionalGreeting';
import FunctionalGreetingWithProps from './test-app/src/components/FunctionalGreetingWithProps';
import StatefulGreeting from './test-app/src/components/StatefulGreeting'


function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting />
    </div>
  );
}

export default App;
