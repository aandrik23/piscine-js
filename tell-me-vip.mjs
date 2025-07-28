import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';


let path = "."

if ((process.argv).length >= 3) {

    path = process.argv[2]
}

try {

    const guests = await readdir(path)
    
    let guestlist= []
    
    
        for ( const guest of guests) {

            const filePath = `${path}/${guest}`;
    
            const rawContent = await readFile(filePath, { encoding: 'utf8' });
            
            const content = JSON.parse(rawContent);

            if (content.answer === "yes") {
        
                const name = guest.split("_")[0]
                const surname = guest.split("_")[1].split(".")[0]
                guestlist.push(surname.concat(" ",name))
                  
            }
        }
        
    guestlist.sort()
    const numberedGuestlist = guestlist.map((name, index) => `${index + 1}. ${name}`);
  
     await writeFile('vip.txt', numberedGuestlist.join('\n'));

   
} catch(err) {
    console.log(err)
}