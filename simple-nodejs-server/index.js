//An Example Node.js Application can be found here: https://nodejs.dev/en/learn/
const http = require('http')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    greeting:'Hey!',
    name: "Ikraan",
}))
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
