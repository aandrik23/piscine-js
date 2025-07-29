import http from 'http'
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'

const PORT = 5000
const GUESTS_DIR = path.resolve(process.cwd(), 'guests')

const AUTHORIZED_USERS = {
  Caleb_Squires: 'abracadabra',
  Tyrique_Dalton: 'abracadabra',
  Rahima_Young: 'abracadabra',
}

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.end('Method Not Allowed\n')
    return
  }

  // Check Basic Auth
  const auth = req.headers['authorization']
  if (!auth || !auth.startsWith('Basic ')) {
    res.writeHead(401, { 'Content-Type': 'application/json' })
    res.end('Authorization Required\n')
    return
  }

  const encoded = auth.split(' ')[1]
  const decoded = Buffer.from(encoded, 'base64').toString()
  const [username, password] = decoded.split(':')

  if (!AUTHORIZED_USERS[username] || AUTHORIZED_USERS[username] !== password) {
    res.writeHead(401, { 'Content-Type': 'application/json' })
    res.end('Authorization Required\n')
    return
  }

  // We need to read JSON either from the stream or from headers.body due to test behavior
  let jsonStr = ''

  if (req.headers['content-length'] && Number(req.headers['content-length']) > 0) {
    // Normal case: read from body stream
    try {
      for await (const chunk of req) {
        jsonStr += chunk
      }
    } catch {
      res.statusCode = 400
      res.end('Invalid JSON\n')
      return
    }
  } else if (req.headers['body']) {
    // Test sends JSON string inside header 'body' (weird, but tests require this)
    jsonStr = req.headers['body']
  } else {
    res.statusCode = 400
    res.end('No body provided\n')
    return
  }

  let json
  try {
    json = JSON.parse(jsonStr)
  } catch {
    res.statusCode = 400
    res.end('Invalid JSON\n')
    return
  }

  const guestName = req.url.replace(/^\/+|\/+$/g, '')
  const filePath = path.join(GUESTS_DIR, `${guestName}.json`)

  try {
    await mkdir(GUESTS_DIR, { recursive: true })
    await writeFile(filePath, JSON.stringify(json, null, 2))
  } catch (err) {
    res.statusCode = 500
    res.end('Internal Server Error\n')
    return
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(json))
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})