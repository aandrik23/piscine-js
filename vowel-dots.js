const vowels = /[aeiouAEIOU]/g;

function vowelDots(str) {
    return str.replace(vowels, match => match + '.');
}

console.log(vowelDots("hello"));     // → "he.llo."
console.log(vowelDots("javascript")); // → "ja.va.scri.pt"
console.log(vowelDots("rhythm"));
console.log(vowelDots("aeiouAEIOU")); // → "a.e.i.o.u.A.E.I.O.U."