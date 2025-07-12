const vowels = /[aeiouAEIOU]/g;

function vowelDots(str) {
    return str.replace(vowels, match => match + '.');
}

console.log(vowelDots("hello"));     
console.log(vowelDots("javascript")); 
console.log(vowelDots("rhythm"));
console.log(vowelDots("aeiouAEIOU")); 