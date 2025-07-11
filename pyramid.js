const pyramid = (char, height) => {
    char = String(char);
    height = Number(height);
  
    if (!Number.isInteger(height) || height <= 0) return '';
  
    const result = [];
  
    for (let i = 1; i <= height; i++) {
      const chars = char.repeat(2 * i - 1);
      const totalWidth = char.length * (2 * height - 1);
      const lineWidth = char.length * (2 * i - 1);
      const padding = ' '.repeat((totalWidth - lineWidth) / 2);
      result.push(padding + chars);
    }
  
    return result.join('\n');
  };

console.log(pyramid('*', 5));
console.log(pyramid('{}', 3));