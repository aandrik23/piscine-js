function deepCopy(value) {
    if (Array.isArray(value)) {
      return value.map(deepCopy);
    } else if (value && typeof value === "object") {
      const result = {};
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          result[key] = deepCopy(value[key]); 
        }
      }
      return result;
    } else {
      return value; 
    }
  }