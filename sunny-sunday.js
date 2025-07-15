function sunnySunday(date) {
    const year = date.getFullYear();
    const msPerDay = 24 * 60 * 60 * 1000;
    const startOfYear = new Date('0001-01-01T00:00:00Z').getTime();
    const today = new Date(year, date.getMonth(), date.getDate());
  
    // day-of-year index (Jan 1 → 0)
    const totalDays = Math.floor((today - startOfYear) / msPerDay);
  
    // map into a 6-day cycle
    const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return weekdays[ totalDays % 6 ];
  }