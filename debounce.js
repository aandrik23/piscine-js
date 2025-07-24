function debounce(fn, delay) {
  let timer = null;
  
  return function(...args) {
    if (timer) {
        clearTimeout(timer);
    }
    timer= setTimeout(() => {
      fn.apply(this, args);
    }, delay);
};
}

function opDebounce(fn, delay, leading = false) {
    let timer = null;
    let called = false;
  
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
  
      if (leading && !called) {
        fn.apply(this, args);
        called = true;
      }
  
      timer = setTimeout(() => {
        if (!leading) {
          fn.apply(this, args); 
        }
        called = false; 
      }, delay);
    };
  }