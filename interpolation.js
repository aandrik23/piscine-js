function interpolation({ step, start, end, callback, duration }) {
    const interval = duration / step;
    const stepSize = (end - start) / step;
  
    for (let i = 1; i <= step; i++) {
      setTimeout(() => {
        const x = i * stepSize;       
        const y = start + x;         
        callback([x, y]);
      }, interval * i);
    }
  }