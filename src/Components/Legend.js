import React from "react";
import "./Legend.css";

export default class Legend extends React.Component {
  render() {
    return (
      <div className="Legend--div">
        <ul className="Legend--menu">
          <li className="Legend--item1">
            <p>Start Node</p>
          </li>
          <li className="Legend--item2">
            <p>Target Node</p>
          </li>
          <li className="Legend--item3">
            <p>Unvisited Node</p>
          </li>
          <li className="Legend--item4">
            <p>Shortest Path</p>
          </li>
          <li className="Legend--item5">
            <p>Wall Node</p>
          </li>
        </ul>
      </div>
    );
  }
}
