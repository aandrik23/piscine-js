function deepCopy(value) {
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, deepCopy(val)]));
    } else {
        return obj;
    }
}
