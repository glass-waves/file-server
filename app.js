const net = require("net");
const fs = require('fs').promises;
const createResponse = require("./utils/createResponse");
const parseRequest = require("./utils/parseRequest");

const app = net.createServer((socket) => {
    socket.on('data', (data) => {
        const request = parseRequest(data);
        const path = request.path;
        const cleanPath = path.replace('/file', '');
        if(request.method === 'GET' && request.path === `/file${cleanPath}`);
            fs.readFile(`public${cleanPath}`)
                .then(data => {
                    socket.end(createResponse({body : data, contentType : 'text/html', status : '200 OK' }));              
                })
                .catch(error => console.error(error))
    })
});


module.exports = app;