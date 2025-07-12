const normal = /hi/;
const begin = /^hi/;
const end = /hi$/;
const beginEnd = /^hi$/;

console.log(normal.test("oh hi there"));     
console.log(begin.test("hi there"));         
console.log(end.test("say hi"));             
console.log(beginEnd.test("hi"));            
console.log(beginEnd.test("hiya"));          