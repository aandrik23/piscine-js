function slice(input, start, end) {
    const length = input.length;

    let startIndex = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    let endIndex = end === undefined ? length : (end < 0 ? Math.max(length + end, 0) : Math.min(end, length));
    let result = Array.isArray(input) ? [] : '';

    for (let i = startIndex; i < endIndex; i++) {
        if (Array.isArray(input)) {
            result.push(input[i]);
        } else {
            result += input[i];
        }
    }
    return result;
}

console.log(slice([1, 2, 3, 4, 5], 1, 3)); 
console.log(slice('Hello, World!', 7, 12)); 
console.log(slice([1, 2, 3, 4, 5], -2));
console.log(slice('Hello, World!', -6));  