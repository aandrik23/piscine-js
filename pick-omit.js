const normalizeKeys = (keys) => Array.isArray(keys) ? keys : [keys];

function pick(obj, keys) {
    const keyArray = normalizeKeys(keys);
    const result = {};

    for (let key of keyArray) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

function omit(obj, keys) {
    const keyArray = normalizeKeys(keys);
    const result = {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!keyArray.includes(key)) {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

const user = {name: 'Andreas', age: 25, city: 'Athens'};
console.log(pick(user, ['name', 'city']));
console.log(omit(user, ['age']));