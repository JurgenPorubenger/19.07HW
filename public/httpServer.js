// const http = require('http');
// const PORT = process.env.PORT|| 3000;
//
// http.createServer((req,res) => {
//     // res.writeHead(200, {'Content-Type': 'text/plain' });
//     // res.end('123');
//     if(req.url==='/') {
//         res.writeHead(200, {'Content-Type': 'text/plain' });
//         res.end('123');
//     } else if(req.url==='/about'){
//         res.writeHead(200, {'Content-Type': 'text/html' });
//         res.end('Here is about');
//     }else {
//         res.writeHead(404, {'Content-Type': 'text/html' });
//         res.end('<h3>Poprobuyte zaiti na /</h3><h1>404</h1>');
//     }
// }).listen(PORT, ()=> console.log('Listening on port 3000'));






const http = require('http');
const fs = require('fs');
const path = require('path');
// path, os , fs, http
//
// __filename, __dirname
const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        req.url === '/' ? 'index.html':req.url
    );
    // console.log(filePath);
    // let extname = path.extname(filePath);
    let contentType = 'text/html';
console.log(path.basename(filePath));
console.log(filePath);

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
                default:
                    res.writeHead(404, {'Content-type': contentType});
                    res.end(`<h1>404 ${err} </h1>`);
            };

        // if (!err.code == 'ENOENT') {
        //     console.log(err);
        //     // Returning a page 404
        //     res.end('ASHiBKA!!');
        // }
        // else {
        //     if(err) {
        //         res.writeHead(500,{'Content-type': 'text/html'});
        //         res.end('<h1>500 err </h1>');
        //         // Returning a page 500
        //     }
        //     else {
        //         res.writeHead(200, {'Content-type': contentType});
        //         res.end(data);
        //         // Returning a page 200
        //     }
        // }
    })});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log('Listening 8080');
});
