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
    let timeout = null;
    let lastArgs;
    let lastContext;
  
    function invoke() {
      lastCallTime = Date.now();
      timeout = null;
      fn.apply(lastContext, lastArgs);
      lastArgs = lastContext = null;
    }
  
    return function (...args) {
      const now = Date.now();
  
      const isFirstCall = !lastCallTime;
      const remaining = delay - (now - lastCallTime);
  
      lastArgs = args;
      lastContext = this;
  
      if (isFirstCall && !leading) {
        lastCallTime = now;
      }
  
      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastCallTime = now;
        fn.apply(lastContext, lastArgs);
        lastArgs = lastContext = null;
      } else if (trailing && !timeout) {
        timeout = setTimeout(invoke, remaining);
      }
    };
  }
  