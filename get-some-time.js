function firstDayWeek(week, year) {
    const jan1 = new Date(`${year}-01-01`);
    const jan1Weekday = jan1.getDay();


// calc days back to monday


    const backToMonday = jan1Weekday === 0 ? -6 : 1 - jan1Weekday;

// go to the first monday before
    const firstMonday = new Date(jan1)
    firstMonday.setDate(jan1.getDate() + backToMonday + (week - 1) * 7);

// bring the first monday of the month
    if (firstMonday <  jan1) {
        return formatDate(jan1)
    }

    return formatDate(firstMonday);
}


function formatDate(date){
  const dd   = String(date.getDate()).padStart(2, '0');
  const mm   = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear()).padStart(4, '0');

  return `${dd}-${mm}-${yyyy}`;
}