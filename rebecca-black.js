function isFriday(date) {
    return date instanceof Date && date.getDay() === 5;
  }
  
  function isWeekend(date) {
    return date instanceof Date && (date.getDay() === 6 || date.getDay() === 0);
  }
  
  function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    
  }
  
  function isLastDayOfMonth(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return false;
    }
    const mockDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return date.getDate() === mockDate.getDate();
  }