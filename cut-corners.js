const trunc = n => {
    return n < 0 ? n - (n % 1) - 1 + 1 : n - (n % 1);
  };
  
  const floor = n => {
    const int = n - (n % 1);
    return n < 0 && n !== int ? int - 1 : int;
  };
  
  const ceil = n => {
    const int = n - (n % 1);
    return n > 0 && n !== int ? int + 1 : int;
  };
  
  const round = n => {
    const int = n - (n % 1);
    const frac = n - int;
    if (n >= 0) {
      return frac >= 0.5 ? int + 1 : int;
    } else {
      return frac <= -0.5 ? int - 1 : int;
    }
  };

  
  const nums = [3.7, -3.7, 3.1, -3.1];

console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
console.log(nums.map(ceil));  // [ 4, -3, 4, -3 ]