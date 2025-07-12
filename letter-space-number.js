function letterSpaceNumber(str) {
    const regex = /([a-zA-Z]) (\d)(?!\d|[a-zA-Z])/g;
    return [...str.matchAll(regex)].map(m => m[0]);
  }

console.log(letterSpaceNumber('a 1 b 2c 3 d 4x e 5'));
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'));