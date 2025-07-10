const trunc = n => {
    return n < 0 ? n - (n - (n / 1)) : n - (n - (n / 1));
  };
  
  const floor = n => {
    const i = n - (n - (n / 1));
    return (n < 0 && n !== i) ? i - 1 : i;
  };
  
  const ceil = n => {
    const i = n - (n - (n / 1));
    return (n > 0 && n !== i) ? i + 1 : i;
  };
  
  const round = n => {
    const i = n - (n - (n / 1));
    const f = n - i;
    return n >= 0
      ? (f >= 0.5 ? i + 1 : i)
      : (f <= -0.5 ? i - 1 : i);
  };
  