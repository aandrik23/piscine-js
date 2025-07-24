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
    let timer = null;
    let lastCallTime = 0;
    let lastArgs = null;
    let lastThis = null;
    let shouldCallLater = false;
  
    return function (...args) {
      const now = Date.now();
  
      // Αν είναι πρώτη φορά και leading: false, μην καλέσεις fn
      if (!lastCallTime && !leading) {
        lastCallTime = now;
      }
  
      const remaining = delay - (now - lastCallTime);
      lastArgs = args;
      lastThis = this;
  
      if (remaining <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
  
        lastCallTime = now;
        fn.apply(lastThis, lastArgs);
      } else if (trailing && !timer) {
        // Προγραμματίζουμε trailing εκτέλεση
        timer = setTimeout(() => {
          lastCallTime = leading ? Date.now() : 0;
          timer = null;
          if (trailing) {
            fn.apply(lastThis, lastArgs);
          }
        }, remaining);
      }
    };
  }