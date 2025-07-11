const findExpression = (target) => {
    const queue = [{ value: 1, path: '1' }];
  
    const apply = {
      [add4]: x => x + (add4 === '+4' ? 4 : NaN),
      [mul2]: x => x * (mul2 === '*2' ? 2 : NaN),
    };
  
    while (queue.length) {
      const { value, path } = queue.shift();
      if (value === target) return path;
      if (value > target) continue;
  
      for (const op in apply) {
        queue.push({ value: apply[op](value), path: path + ' ' + op });
      }
    }
  
    return undefined;
  };

console.log(findExpression(8));   
console.log(findExpression(15));  
console.log(findExpression(16));   