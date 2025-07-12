function letterSpaceNumber(str) {
    const regex = /\b([a-zA-Z]) (\d)(?![a-zA-Z])/g;
    return [...str.matchAll(regex)].map(match => match[0]);
}

console.log(letterSpaceNumber('a 1 b 2c 3 d 4x e 5'));