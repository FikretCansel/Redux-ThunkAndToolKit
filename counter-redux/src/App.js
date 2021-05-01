import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import "./App.css"

function App() {
  return (
    <div className="App">
      <DecreaseCounter/>
      <Counter/>
      <IncreaseCounter/>
    </div>
  );
}

export default App;
