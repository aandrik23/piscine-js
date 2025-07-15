function isValid(date) {
    if (!(date instanceof Date || typeof date === 'number')) {
      return false;
    }
    const d = new Date(date);
    return !isNaN(d.getTime());
  }
  
  function isAfter(date1,date2){
    return new Date(date1).getTime() > new Date(date2).getTime()
  }
  
  function isBefore(date1,date2){
    return new Date(date1).getTime() < new Date(date2).getTime()
  }
  
  function isFuture(date){
    if (!isValid(date)) return false;
    return new Date(date).getTime() > Date.now();
  }
  
  function isPast(date){
     if (!isValid(date)) return false;
    return new Date(date).getTime() < Date.now();
  }