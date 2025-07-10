const split = (str, separator) => {
    const result = [];
    let temp = '';
    
    for (let i = 0; i < str.length; i++) {
  
      if (separator && str.slice(i, i + separator.length) === separator) {
        result.push(temp);
        temp = '';
        i += separator.length - 1;
      } else {
        temp += str[i];
      }
    }
  
    result.push(temp);
    return result;
};

const join = (arr, separator) => {
    let result = '';
    
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1 && separator) {
            result += separator;
        }
    }
    
    return result;
}
  