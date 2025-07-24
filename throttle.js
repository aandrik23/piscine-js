function throttle(callback, interval) {
    let lastCall = true;
  
    return (...args) => {
      if (!lastCall) return;
  
      lastCall = false;
      callback.apply(this, args);
      setTimeout(() => lastCall = true, interval);
    };
  }
  
  function opThrottle(func, wait, option = {}) {
    let timer = null, last = null;
  
    function setTimer() {
      timer = setTimeout(() => {
        timer = null;
        if (last && option.trailing) {
          func.apply(last.context, last.args);
          setTimer();
        }
        last = null;
      }, wait);
    }
  
    return function throttled(...args) {
      if (timer === null) {
        option.leading ? func.apply(this, args) : last = { args, context: this };
        setTimer();
      } else {
        last = { args, context: this };
      }
    };
  }