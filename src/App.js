import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App--body">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>
  );
}

export default App;
