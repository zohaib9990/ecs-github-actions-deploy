const http = require('http');
const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  res.end('Hello from ECS + GitHub Actions!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
