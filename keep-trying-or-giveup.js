function retry(count = 3, callback = async () => {}) {
    return async function (...args) {
      try {
        const res = await callback(...args);
        return res;
      } catch (e) {
        if (count > 0) {
          return retry(count - 1, callback)(...args);
        } else {
          throw e;
        }
      }
    };
  }
  
  function timeout(delay = 0, callback = async () => {}) {
    return async function (...args) {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), delay)
      );
  
      return Promise.race([
        callback(...args),   
        timeoutPromise        
      ]);
    };
  }
  