
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        req.url === '/' ? 'index.html':req.url
    );
   
    let contentType = 'text/html';
// console.log(path.basename(filePath));
// console.log(filePath);

    fs.readFile(filePath, 'utf-8', (err, data) => {
            switch(path.basename(filePath)) {
                case 'index.html':
                    res.writeHead(200, {'Content-type': contentType});
                    res.end(data);
                    break;
                case 'about.html':
                    res.writeHead(200, {'Content-type': contentType});
                    res.end(data);
                    break;
                case 'blog.html':
                    res.writeHead(200, {'Content-type': contentType});
                    res.end(data);
                    break;
                default:
                    res.writeHead(404, {'Content-type': contentType});
                    res.end(`<h1>404 ${err} </h1>`);
            };

    })});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log('Listening 8080');
});
