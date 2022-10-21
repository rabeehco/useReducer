
import './App.css';
import Counter1 from './Components/Counter1'
import Counter2 from './Components/Counter2';
import Counter3 from './Components/Counter3';

function App() {
  return (
    <div className="App">
      <h1>Counter One</h1>
      <Counter1 />
      <hr />
      <h1>Counter Two</h1>
      <Counter2 />
      <hr />
      <h1>Counter Three</h1>
      <Counter3 />
    </div>
  );
}

export default App;
