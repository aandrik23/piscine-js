const is = {};
is.num = function(x) {
    return typeof x === 'number' && !Number.isNaN(x);
};
is.nan = function(x) {
    return Number.isNaN(x);
};
is.str =  function(x) {
    return typeof x === 'string';
};
is.bool = function(x) {
    return typeof x === 'boolean';
};
is.undef = function(x) {
    return typeof x === 'undefined'
};
is.def = function(x) {
    return typeof x !== 'undefined';
};
is.arr = function(x) {
    return Array.isArray(x);
};
is.obj = function(x) {
    return typeof x === 'object' && x !== null && !Array.isArray(x);
};
is.fun = function(x) {
    return typeof x === 'function';
};
is.truthy = function(x) {
    return !!x;
};
is.falsy = function(x) {
    return !x;
};

console.log(is.num(5));
console.log(is.num(NaN));
console.log(is.nan(NaN));
console.log(is.str('hello'));
console.log(is.str(5));
console.log(is.bool(true));
console.log(is.bool(false));
console.log(is.undef(undefined));
console.log(is.def(5));
console.log(is.arr([1, 2, 3]));
console.log(is.arr('hello'));
console.log(is.obj({ key: 'value' }));
console.log(is.obj([1, 2, 3]));
console.log(is.fun(function() {}));
console.log(is.fun(() => {}));
console.log(is.truthy(1));
console.log(is.truthy('hello'));
console.log(is.falsy(0));
console.log(is.falsy(''));
