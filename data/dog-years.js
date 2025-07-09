function dogYears(planet,seconds) {
    const orbitalPeriods = {
        earth :1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    const Earth_Year_Seconds = 31557600; // seconds in one Earth year
    const earthYears = seconds / Earth_Year_Seconds;
    const planetYears = earthYears / orbitalPeriods[planet.toLowerCase()];
    const dogYears = planetYears * 7;

    return Number(dogYears.toFixed(2));
    }

console.log(dogYears("earth", 1000000000)); 
console.log(dogYears("mars", 1000000000));
