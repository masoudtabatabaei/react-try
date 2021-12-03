import { Component } from "react";

class Car extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            newColor :''
        };
    }

    changeColor = (color) => {
        this.setState({color : color})
    };

    render() {
        return (
            <div style={{ backgroundColor : this.state.newColor }}>
                <h1>My {this.state.brand}</h1>
                <p>
                It is a {this.state.color}
                {this.state.model}
                from {this.state.year}.
                </p>
                <button
                type="button"
                onClick={() => this.setState({newColor: this.state.color})}
                >Change color</button>
                <input type="color" value={this.state.color} onChange={(e) => this.setState({color : e.target.value})} />
            </div>
        );
    }
}

export default Car;