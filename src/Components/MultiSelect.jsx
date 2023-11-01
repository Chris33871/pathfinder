import React from "react";
import "./Navbar.css";

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  render() {
    return (
      <select
        className="dropdown--multiselect"
        multiple={false}
        value={["Dijkstra", "Other", "Other2"]}
      >
        <option className="dropdown--option" value="A">
          Dijkstra's
        </option>
        <option className="dropdown--option" value="B">
          Other
        </option>
        <option className="dropdown--option" value="C">
          Other
        </option>
      </select>
    );
  }
}

export default MultiSelect;
