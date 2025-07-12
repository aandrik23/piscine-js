function ionOut(str) {
    const regex = /\b\w*tion\b/g;
    const matches = str.match(regex) || [];
    return matches.map(word => word.slice(0, word.indexOf('ion')));
  }

console.log(ionOut("This action and reaction were seen in the station."));


console.log(ionOut("The mention and function were complex."));
