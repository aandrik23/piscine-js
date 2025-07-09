const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

const arrToSet = arr => new Set(arr); 
const arrToStr = arr => arr.join('');
const setToArr = set => Array.from(set);
const setToStr = set => setToArr(set).join('');
const strToArr = str => str.split('');
const strToSet = str => new Set(str);
const mapToObj = map => Object.fromEntries(map);
const objToArr = obj => Object.values(obj);
const objToMap = obj => new Map(Object.entries(obj));
const arrToObj = arr => Object.fromEntries(Object.entries(arr));
const strToObj = str => Object.fromEntries(Object.entries(str));

const superTypeOf = value => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (Array.isArray(value)) return 'Array';

    const rawType = typeof value;
    if (rawType === 'object') {
        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    }
    return rawType[0].toUpperCase() + rawType.slice(1);
}


console.log(arrToSet(arr));
console.log(arrToStr(arr));
console.log(setToArr(set));
console.log(setToStr(set));
console.log(strToArr(str));
console.log(strToSet(str));
console.log(mapToObj(map));
console.log(objToArr(obj));
console.log(objToMap(obj));
console.log(arrToObj(arr));
console.log(strToObj(str));
console.log(superTypeOf(map));         
console.log(superTypeOf(set));         
console.log(superTypeOf(obj));         
console.log(superTypeOf(str));      
console.log(superTypeOf(666));       
console.log(superTypeOf(NaN));         
console.log(superTypeOf(arr));         
console.log(superTypeOf(null));        
console.log(superTypeOf(undefined));   
console.log(superTypeOf(superTypeOf)); 