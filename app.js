const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to My App!</h1><p>This is your new homepage.</p>');
});
server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://127.0.0.1:3000');
});
