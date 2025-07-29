import { readFile, readdir} from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';


const dir = path.join(process.cwd(), 'guests')

const server = http.createServer(async (request, response) => {

    response.setHeader('Content-Type', 'application/json');
    const name = request.url.startsWith('/') ? request.url.slice(1) : request.url;

    try {
        if (!name) {
            response.writeHead(404);
            return response.end(JSON.stringify({error:'guest not found'}))
        }

        const guests = await readdir(dir);
        const match = guests.find(guest => path.parse(guest).name === name)
        if (!match) {
            response.writeHead(404);
            return response.end(JSON.stringify({error:'guest not found'}))
        }

        const json = await readFile(path.join(dir, match), 'utf8')
        const payload = JSON.parse(json)

        response.writeHead(200);
        response.end(JSON.stringify(payload))

    } catch(err) {

        response.writeHead(500);
        return response.end(JSON.stringify({error:'server failed'}))
    }
})

const port = 5000;
server.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})