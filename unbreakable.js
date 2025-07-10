const split = (str, separator) => {
    if (separator === '') {
      const result = [];
      for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
      }
      return result;
    }
  
    const result = [];
    let temp = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str.slice(i, i + separator.length) === separator) {
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
      if (i < arr.length - 1) result += separator;
    }
    return result;
  };
    