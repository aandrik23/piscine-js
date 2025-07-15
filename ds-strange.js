const MS_PER_DAY = 24 * 60 * 60 * 1000;
const EPOCH_MS = Date.parse('0001-01-01T00:00:00Z');


  const DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

function addWeek(date){
  
 const msSince1970 = date.getTime();
  const msOfDay = 
    date.getUTCHours()   * 3600_000 +
    date.getUTCMinutes() *   60_000 +
    date.getUTCSeconds() *    1_000 +
    date.getUTCMilliseconds();

  const utcMidnightMs = msSince1970 - msOfDay;

  const daysSinceEpoch = Math.floor((utcMidnightMs - EPOCH_MS) / MS_PER_DAY);

  const idx = ((daysSinceEpoch % 14) + 14) % 14;

  if (idx < 7) {
    return DAYS[idx];
  } else {
    return 'second' + DAYS[idx - 7];
  }

}

function timeTravel({ date, hour, minute, second }) {
  const result = new Date(date.getTime());
  result.setHours(hour, minute, second);
  return result;
}
