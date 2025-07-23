const filterKeys = (obj, cond) => 
    Object.keys(obj).reduce((res, key) => (cond(key) && (res[key] = obj[key]), res), {});

const mapKeys =(obj, transform) =>
    Object.keys(obj).reduce((res, key) => ((res[transform(key)] = obj[key]), res), {});

const reduceKeys = (obj, cond, init = '') =>
    Object.keys(obj).reduce((acc, key) => cond(acc, key), init);

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat