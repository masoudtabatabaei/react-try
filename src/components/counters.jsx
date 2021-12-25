import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 6 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    let findIndex = this.state.counters.findIndex((item) => item.id === id);
    this.setState(this.state.counters.splice(findIndex, 1));
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            handleDelete={this.handleDelete}
          >
            <h4>Title #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
