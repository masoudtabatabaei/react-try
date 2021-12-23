import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }

  renderTags() {
    const tags = this.state.tags;
    if (tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement() {
    console.log("Click Increment Button");
  }

  render() {
    return (
      <div className="container m-2">
        <span className={this.setBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <br />
        {this.renderTags()}
      </div>
    );
  }

  setBadgeClass() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }
}

export default Counter;
