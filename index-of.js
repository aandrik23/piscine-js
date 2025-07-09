const indexOf = (arr, value, fromIndex = 0) => {
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};
const lastIndexOf = (arr, value, fromIndex = arr.length - 1) => {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};
const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
};

const nums = [1, 2, 3, 2, 4];

console.log(indexOf(nums, 2));          
console.log(indexOf(nums, 2, 2));       
console.log(lastIndexOf(nums, 2));       
console.log(lastIndexOf(nums, 2, 2));    
console.log(includes(nums, 4));          
console.log(includes(nums, 9));         