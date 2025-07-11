const flat = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            for (let j = 0; j < item.length; j++) {
                result.push(item[j]);
            }
            } else {
            result.push(item);
    }
}
return result;
};

console.log(flat([1, 2, [3, 4], 5])); 
console.log(flat([[1, 2], [3, 4], [5]])); 
console.log(flat([[1, 2], 3, [4, 5]])); 