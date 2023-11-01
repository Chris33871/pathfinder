import React from "react";
import "./Navbar.css";
import MultiSelect from "./MultiSelect";

const ClearScreen = () => {
  // Needs to be changed to only reload the grid
  window.location.reload();
};

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar--div">
        <div className="navbar--title">
          <h2>PathfindingVisualizer</h2>
        </div>
        <ul className="navbar--menu">
          <MultiSelect />
          <button onClick={ClearScreen}>Clear</button>
        </ul>
      </div>
    );
  }
}
