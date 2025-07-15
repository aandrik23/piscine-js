function matchCron(cron, date) {
    const cronParts = cron.split(' ')
    const [min, hour, monthDay, month, weekDay] = cronParts
    
    const dateValues= [
      date.getMinutes(),
      date.getHours(),
      date.getDate(),
      date.getMonth() + 1, // JS month starting index is 0
      (date.getDay() == 0 ? 7 : date.getDay()) // JS sunday is 0 
      ];
      
      for (let i =0; i < 5; i++) {
        if (cronParts[i] === '*') continue;
        if (parseInt(cronParts[i], 10) !== dateValues[i]){
          return false
        }
      }
      return true;
  }