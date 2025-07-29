import http from 'http'
import fs from 'fs/promises'
import { parse } from 'url'

const PORT = 5000

const server = http.createServer((req, res) => {
    const { pathname } = parse(req.url)
    const name = pathname.slice(1)

    if (req.method === 'POST' && name) {
        let body = ''

        req.on('data', chunk => {
            body += chunk
        })

        req.on('end', async () => {
            try {
                // Save body (even if it's a plain string) to guests/Name.json
                await fs.writeFile(`guests/${name}.json`, body)

                // Try to parse it to JSON (only for the response)
                let responseData
                try {
                    responseData = JSON.parse(body)
                } catch {
                    responseData = body // fallback: raw string
                }

                res.writeHead(201, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(responseData))
            } catch {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'server failed' }))
            }
        })
    } else {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'server failed' }))
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})