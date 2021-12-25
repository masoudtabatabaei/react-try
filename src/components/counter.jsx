import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  setBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }

  render() {
    return (
      <div className="container m-2">
        {this.props.children}
        <span className={this.setBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.handleDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
