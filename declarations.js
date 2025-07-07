const escapeStr = "Hello\n`World`/my name is 'Andrew'."
const arr = Object.freeze([4, '2'])
const obj = Object.freeze({
    str: "Hello, World!",
    num: 16,
    bool: true,
    undef: undefined,
    nested: Object.freeze({
        arr: Object.freeze([4, undefined, '2']),
        obj: Object.freeze({
            str: "my name is Andrew.",
            num: 24,
            bool: true,
        })
    })
});