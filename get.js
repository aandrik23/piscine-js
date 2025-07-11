const get = (src, path) => {
    const keys = path.split('.');  // Διαχωρίζουμε τη διαδρομή
    let current = src;
  
    for (let i = 0; i < keys.length; i++) {
      if (current === undefined || current === null) return undefined;
      current = current[keys[i]];
    }
  
    return current;
  };

  console.log(get({ a: { b: { c: 42 } } }, 'a.b.c')); // 42
    console.log(get({ a: { b: { c: 42 } } }, 'a.b.d')); // undefined
    console.log(get({},    'a.b.c.d')); // undefined