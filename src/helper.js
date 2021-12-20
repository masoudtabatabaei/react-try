function toCelsius(farenhite) {
    return (farenhite - 32) * 5 / 9;
}

function toFarenhite(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export {toCelsius , toFarenhite , tryConvert};