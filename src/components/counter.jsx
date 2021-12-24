import React, { Component } from "react";

class Counter extends Component {
  state = {
    id : this.props.id ,
    count : this.props.value
  };

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    this.setState({count:this.state.count+1});
  }

  setBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }

  render() {
    console.log(this.props);
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
      </div>
    );
  }
}

export default Counter;
