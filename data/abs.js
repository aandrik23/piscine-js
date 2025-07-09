function isPositive(num) {
    return num > 0;
}

function abs(num) {
    return num < 0 ? -num : num;
}

console.log(isPositive(5));
console.log(isPositive(-5));
console.log(isPositive(0));
console.log(abs(5));
console.log(abs(-5));
console.log(abs(0));
