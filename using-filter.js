const vowels = ['a','e','i','o','u'];

function countVowels(s) {
    let count = 0;
    for (const char of s.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

function filterShortStateName(arr) {
    return arr.filter((states) => states.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((word) => {
        const firstChar = word[0].toLowerCase();
        return vowels.includes(firstChar);
    });
}

function filter5Vowels(arr) {
    return arr.filter((word) => countVowels(word) >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter((word) => {
        const seen = [];
        for (const char of word.toLowerCase()) {
            if (vowels.includes(char)) {
                if (!seen.includes(char)) {
                    seen.push(char)
                    if (seen.length > 1) {
                        return false // return early
                    }
                }
            }
        }
        return seen.length === 1;
    });
}

function multiFilter(arr) {
    return arr.filter(({name, capital, tag, region}) => {

        if (capital.length < 8) return false;
        if (vowels.includes(name[0].toLowerCase())) return false;
        if (region.toLowerCase() === 'south') return false;
        let flag = false
        for (const char of tag.toLowerCase()) {
           if (vowels.includes(char)) {
            flag = true;
           }
        }
        return flag
    });
}