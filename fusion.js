function fusion(obj1, obj2) {
    const result = {};

    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (let key of keys) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        if (!(key in obj1)) {
            result[key] = val2;
        } else if (!(key in obj2)) {
            result[key] = val1;
        } else {
            if (Array.isArray(val1) && Array.isArray(val2)) {
                result[key] = val1.concat(val2);
            } else if (typeof val1 === "string" && typeof val2 === "string") {
                result[key] = val1 + " " + val2;
            } else if (typeof val1 === "number" && typeof val2 === "number") {
                result[key] = val1 + val2;
            } else if (isObject(val1) && isObject(val2)) {
                result[key] = fusion(val1, val2);
            } else {
                result[key] = val2;
            }
        }
    }
    return result;
}

function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

console.log(fusion({ arr: [1, "2"]}, { arr: [2]}));
console.log(fusion({ str: "salem" }, { str: "alem"}));
console.log(fusion({ a: 10, b: 8 }, { a: 5, b:2 }));
console.log(fusion(
    { a: { b: [3, 2], c: { d: 8 } } },
    { a: { b: [0, 3, 1], c: { d: 3 } } }
  ));
console.log(fusion(
    { a: "hello", b: [] },
    { a: 4 }
  ));