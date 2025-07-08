function sign(num) {
    if (num > 0) {
        return 1;
    }
    if (num < 0) {
        return -1;
    }
    return 0;
}

console.log(sign(5));
console.log(sign(-5));
console.log(sign(0));