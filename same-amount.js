function sameAmount(str, reg1, reg2) {
    const r1 = new RegExp(reg1.source, reg1.flags.includes('g') ? reg1.flags : reg1.flags + 'g');
    const r2 = new RegExp(reg2.source, reg2.flags.includes('g') ? reg2.flags : reg2.flags + 'g');
  
    const match1 = [...str.matchAll(r1)];
    const match2 = [...str.matchAll(r2)];
  
    return match1.length === match2.length;
  }
  

console.log(sameAmount("aaabbb", /a/g, /b/g)); 
console.log(sameAmount("aaabb", /a/g, /b/g));  
console.log(sameAmount("abcabc", /a/g, /z/g)); 
console.log(sameAmount('hello how are you', /l/, /e/));