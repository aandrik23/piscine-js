
const findExpression = (target) => {
  const queue = [{ value: 1, path: '1' }];

  while (queue.length) {
    const { value, path } = queue.shift();
    if (value === target) return path;
    if (value > target) continue;

    queue.push({ value: value + 4, path: path + ' ' + add4 });
    queue.push({ value: value * 2, path: path + ' ' + mul2 });
  }

  return undefined;
};

console.log(findExpression(8));   
console.log(findExpression(15));  
console.log(findExpression(16));   