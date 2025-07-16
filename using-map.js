function citiesOnly(arr) {
    const res = arr.map(({city}) => (city));
    return res
}

function upperCasingStates(arr) {
    return arr.map(arr =>
        arr
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    );
}

function fahrenheitToCelsius(temp) {
    const res = temp.map((tempStr) =>{
        const fValue = parseFloat(tempStr.replace('°F', ''));
        const cValue = Math.floor((fValue - 32) * (5 / 9));
        return cValue + '°C';
    });
    return res
}

function trimTemp(arr) {
    return arr.map((details) => {
        const trimmed = details.temperature.trim().replaceAll(' ','')
        return {
            ...details,
            temperature: trimmed
        };
    })
}

function tempForecasts(arr) {
    const res = arr.map((details) => {
        const rawTemp = details.temperature.trim().replaceAll(' ', '');
        const tempF = parseFloat(rawTemp.replace('°F', ''));
        const tempC = Math.floor((tempF - 32) * (5 / 9));
        const state = details.state
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return `${tempC}°Celsius in ${details.city}, ${state}`

    });
    return res
}