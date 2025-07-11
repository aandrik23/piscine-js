const findExpression = (target) => {
    const ops = [
      { symbol: add4, apply: x => x + (add4.length - 2) },
      { symbol: mul2, apply: x => x * (mul2.length - 1) },
    ];
  
    const queue = [{ value: 1, path: '1' }];
    const seen = new Set([1]);
  
    while (queue.length) {
      const { value, path } = queue.shift();
      if (value === target) return path;
      if (value > target) continue;
  
      for (const { symbol, apply } of ops) {
        const next = apply(value);
        if (!seen.has(next)) {
          seen.add(next);
          queue.push({ value: next, path: path + ' ' + symbol });
        }
      }
    }
  
    return undefined;
  };
  
  

console.log(findExpression(8));   
console.log(findExpression(15));  
console.log(findExpression(16));   