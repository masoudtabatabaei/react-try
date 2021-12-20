import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from './TemperatureInput';
import {toCelsius , toFarenhite , tryConvert} from './helper';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusTemp = this.handleCelsiusTemp.bind(this);
        this.handleFarenhiteTemp = this.handleFarenhiteTemp.bind(this);
        this.state = {temperature: '' , scale : 'c'};
    }

    handleCelsiusTemp(temperature) {
        this.setState({temperature : temperature , scale: 'c'});
    };

    handleFarenhiteTemp(temperature) {
        this.setState({temperature : temperature , scale : 'f'});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const farenhite = scale === 'c' ? tryConvert(temperature, toFarenhite) : temperature;
        
        return (
            <fieldset>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusTemp}/>
                <TemperatureInput scale='f' temperature={farenhite} onTemperatureChange={this.handleFarenhiteTemp}/>
            </fieldset>
        );
    }
}

export default Calculator;