function all(obj) {
    const keys = Object.keys(obj);
    const entries = keys.map(key => [key, Promise.resolve(obj[key])]);
  
    return Promise.all(entries.map(([_, promise]) => promise)).then(values => {
      const result = {};
      keys.forEach((key, i) => {
        result[key] = values[i];
      });
      return result;
    });
  }
  