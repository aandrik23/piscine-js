function words(str) {
    return str.split(' ');
}

function sentence(arr) {
    return arr.join(' ');
}

function yell(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return `*${ str.toLowerCase() }*`;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(words("Hello World"));
console.log(sentence(["Hello", "World"]));
console.log(yell("Hello World"));
console.log(whisper("Hello World"));
console.log(capitalize("hello world"));