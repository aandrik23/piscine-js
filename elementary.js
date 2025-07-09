const multiply = (a, b) => {
    let result = 0;
    const positive =Math.abs(b);
    for (let i = 0; i < positive; i++ ) {
        result += a;
    }
    return b < 0 ? -result : result;
};

const divide = (a,b) => {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    
    const isNegative = (a <0) !== (b < 0);
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    let count = 0;

    while (absA >=  absB) {
        absA -= absB;
        count++;
    }
    return isNegative ? -count : count;
};

const modulo = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    
   const quotient = divide(a, b);
   const product = multiply(quotient, b);
   return a - product;
};


console.log(multiply(3, 4));   
console.log(multiply(-2, 3));  

console.log(divide(10, 3));   
console.log(divide(20, -5));   

console.log(modulo(10, 3));    
console.log(modulo(20, 6));    