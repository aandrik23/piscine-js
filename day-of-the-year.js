function dayOfTheYear(date) {
    const start = Date.UTC(date.getUTCFullYear(), 0, 1); // jan1 UTC
    const now = Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
  
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((now - start) / msPerDay) + 1;
  }