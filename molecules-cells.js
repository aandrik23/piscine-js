const RNA = str => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if ( c === 'G')  result += 'C';
        else if (c === 'C') result += 'G';
        else if (c === 'T') result += 'A';
        else if (c === 'A') result += 'U';
        }
        return result;
    }
   
const DNA = str => {
    let result = '';;
    for (let i = 0; i <str.length; i++) {
        const c = str[i];
        if (c === 'G') result += 'C';
        else if (c === 'C') result += 'G';
        else if (c === 'A') result += 'T';
        else if (c === 'U') result += 'A';
    }
    return result;
}

console.log(RNA('GCTAGC')); 
console.log(DNA('CGAUCG'));