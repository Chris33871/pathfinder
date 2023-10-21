import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import Navbar from "./Components/Navbar";
import Legend from "./Components/Legend";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Legend></Legend>
      <div className="App--body">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>
  );
}

export default App;
