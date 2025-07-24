function throttle(fn, delay) {
    let lastCall = 0;
    
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
        lastCall = now;
        return fn.apply(this, args);
        }
    };
}

function opThrottle(fn, delay, { leading = true, trailing = true } = {}) {
    let lastCallTime = 0;
    let timer = null;
    let savedArgs = null;
    let savedContext = null;
  
    return function (...args) {
      const now = Date.now();
  
      if (!lastCallTime && !leading) {
        lastCallTime = now;
      }
  
      const remaining = delay - (now - lastCallTime);
  
      savedArgs = args;
      savedContext = this;
  
      if (remaining <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        lastCallTime = now;
        fn.apply(savedContext, savedArgs);
      } else if (!timer && trailing) {
        timer = setTimeout(() => {
          lastCallTime = leading ? Date.now() : 0;
          timer = null;
          fn.apply(savedContext, savedArgs);
        }, remaining);
      }
    };
  }