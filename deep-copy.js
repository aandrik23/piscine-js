function deepCopy(value) {
    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    } else if (Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
        return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, deepCopy(val)]));
    } else {
        return obj;
    }
}
