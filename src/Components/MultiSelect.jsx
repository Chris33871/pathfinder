import React from "react";

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  render() {
    return (
      <select multiple={false} value={["Dijkstra", "Other", "Other2"]}>
        <option value="A">Dijkstra's</option>
        <option value="B">Other</option>
        <option value="C">Other 2</option>
      </select>
    );
  }
}

export default MultiSelect;
