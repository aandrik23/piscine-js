import { readdir } from 'node:fs/promises';

let path = "."

if ((process.argv).length >= 3) {

    path = process.argv[2]
}

const guests = await readdir(path)

let guestlist= []

guests.forEach((guest) => {
    const name = guest.split("_")[0]
    const surname = guest.split("_")[1].split(".")[0]
    
    guestlist.push(surname.concat(" ",name))
})

guestlist.sort()

for (let i =1;i <= guestlist.length; i++) {
    console.log(i + ". " + guestlist[i-1]);
}