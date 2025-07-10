const cutFirst = str => str.slice(2);
const cutLast = str => str.slice(0, -2);
const cutFirstLast = str => str.slice(2, -2);
const keepFirst = str => str.slice(0, 2);
const keepLast = str => str.slice(-2);
const keepFirstLast = str => {
    if (str.length <= 2) return str;
    return str.slice(0, 2) + str.slice(-2);
  };


const s = "hello world";

console.log(cutFirst(s));       
console.log(cutLast(s));        
console.log(cutFirstLast(s));   
console.log(keepFirst(s));     
console.log(keepLast(s));       
console.log(keepFirstLast(s));  
