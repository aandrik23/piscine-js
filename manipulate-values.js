function filterValues(obj, callback) {
    const result = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (callback(value)) {
                result[key] = value;
            }
        }
    }
    return result;
}

function mapValues(obj, callback) {
    const result = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = callback(obj[key]);
        }
    }
    return result;
}

function reduceValues(obj, callback, initialValue) {
    let accumulator = initialValue;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            accumulator = callback(accumulator, obj[key]);
        }
    }
    return accumulator;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(filterValues(nutrients, (v) => v <= 12));

console.log(mapValues(nutrients, (v) => v + 1));


console.log(reduceValues(nutrients, (acc, curr) => acc + curr, 0));

