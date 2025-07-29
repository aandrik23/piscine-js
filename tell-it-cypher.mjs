import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { buffer } from 'node:stream/consumers';




const file = process.argv[2]

const mode = process.argv[3]

const content = await readFile(file,{ encoding: 'utf8' } )


let newfile = ""
let givenName = false 

if (process.argv.length === 5) {
    givenName = true
}

switch (mode) {
    case  "encode" : 

        const buf = Buffer.from(content)
        const base64 = buf.toString('base64');
         if (givenName) {
            newfile = process.argv[4]
         } else {
            newfile = "cypher.txt"
         }
        writeFile(newfile,base64) 
        break

        
    case  "decode" :
        const buf1 = Buffer.from(content,"base64")
        const decoded = buf1.toString("utf8")
        if (givenName) {
            newfile = process.argv[4]
         } else {
            newfile = "clear.txt"
         }
        writeFile(newfile,decoded) 
        break


    default: 
        console.log("usage: node FileName file mode [option]") 
        break
    
}