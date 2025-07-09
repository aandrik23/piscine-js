function first(x) {
    return x[0];
}

function last(x) {
    return x[x.length -1 ];
}

function kiss(x) {
    return [last(x) , first(x)];
}
console.log(first("hello"));
console.log(last("ehllo"));
console.log(kiss("hello"));