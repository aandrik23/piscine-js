const flat = (arr, depth = 1) => {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
  
      if (Array.isArray(el) && depth > 0) {
       
        result.push(...flat(el, depth - 1));
      } else {
        result.push(el);
      }
    }
  
    return result;
  };

console.log(flat([1, 2, [3, 4], 5])); 
console.log(flat([[1, 2], [3, 4], [5]])); 
console.log(flat([[1, 2], 3, [4, 5]]));
console.log(flat([1, [2, [3], [4, [5]]]], 2));