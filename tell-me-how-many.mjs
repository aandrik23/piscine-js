import { readdir } from 'node:fs/promises';

let path = "."

if ((process.argv).length >= 3) {

    path = process.argv[2]

}

const files = await readdir(path);

console.log(files.length)