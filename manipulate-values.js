function filterValues(obj, callback) {
    const result = {};
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (callback(value)) {
          result[key] = value;
        }
      }
    }
    return result;
  }
  
  function mapValues(obj, callback) {
    const result = {};
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = callback(obj[key]);
      }
    }
    return result;
  }
  
  function reduceValues(obj, callback, initialValue) {
    let accumulator = initialValue;
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        accumulator = callback(accumulator, obj[key]);
      }
    }
    return accumulator;
  }  

