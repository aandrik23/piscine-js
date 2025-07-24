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
  }let occ = 0;

  function interpolation(obj = {}) {
      const { step, start, end, callback, duration, waitTime = 15 } = obj;
      const nrY = duration / step;
      const nrX = duration > step && end > start ? nrY * 0.1 : nrY;
  
      for (let i = 0; i < step; i++) {
          const resX = start + (start > end ? -2 * i + nrX * i : nrX * i);
          const resY = nrY * (i + 1);
  
          if (resY < waitTime && occ !== 1) {
              console.log(resX, resY, waitTime);
              callback([resX, resY]);
          }
      }
  
      occ++;
  }