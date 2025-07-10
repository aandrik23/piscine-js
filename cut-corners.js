const trunc = n => {
    let i = 0;
    if (n >= 0) {
      while (i + 1 <= n) i++;
    } else {
      while (i - 1 >= n) i--;
    }
    return i;
  };
  
  const floor = n => {
    let i = 0;
    if (n >= 0) {
      while (i + 1 <= n) i++;
    } else {
      while (i - 1 > n) i--;
      if (i > n) i--;
    }
    return i;
  };
  
  
  const ceil = n => {
    let i = 0;
    if (n >= 0) {
      while (i < n) i++;
    } else {
      while (i - 1 >= n) i--;
    }
    return i;
  };
  
  
  const round = n => {
    let i = trunc(n);
    const frac = n - i;
    if (n >= 0) {
      return frac >= 0.5 ? i + 1 : i;
    } else {
      return frac <= -0.5 ? i - 1 : i;
    }
  };
  
