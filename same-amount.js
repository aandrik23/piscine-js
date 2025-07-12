function sameAmount(str, reg1, reg2) {
    const match1 = [...str.matchAll(reg1)];
    const match2 = [...str.matchAll(reg2)];
    return match1.length === match2.length;
  }

console.log(sameAmount("aaabbb", /a/g, /b/g)); // true
console.log(sameAmount("aaabb", /a/g, /b/g));  // false
console.log(sameAmount("abcabc", /a/g, /z/g)); // false