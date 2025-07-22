function invert(obj) {
    const inverted = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            inverted[value] = key;
        }
    }
    return inverted;
}

console.log(invert({ a: 1, b: 2, c: 3 })); 