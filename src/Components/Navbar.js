import React from "react";
import "./Navbar.css";
import MultiSelect from "./MultiSelect";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar--div">
        <div className="navbar--title">
          <h2>PathfindingVisualizer</h2>
        </div>
        <ul className="navbar--menu">
          {/* <button>Select Algorithm</button> */}
          <MultiSelect />
          <button>Clear</button>
        </ul>
      </div>
    );
  }
}
