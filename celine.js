const express = require("express");
const path = require('path');
const logger = require("morgan");
const fs = require('fs');
const url = require('url');
const basePath = '/node_modules/@celine/frontdoor/dist';
const entryPage = __dirname + basePath + '/index.html';

var app = express();

app.use(logger("combined"));

app.use('/dist', express.static(path.join(__dirname + basePath)));

app.use(function (request, response) {

    let pathname = url.parse(request.url).pathname;
    const jsHeader = { 'Content-Type': 'application/javascript' };

    if (pathname.indexOf("keycloak.json") > -1) {
        response.writeHead(200, jsHeader);
        return fs.createReadStream('dist/' + pathname).pipe(response);
    }

    if (pathname.indexOf(".map") > -1 && pathname.indexOf("dist") > -1) {
        res.writeHead(200, jsHeader);
        return fs.createReadStream(pathname).pipe(res);
    }
    else if (pathname.indexOf(".chunk.js") > -1) {
        let chunkNumber = pathname.match(/\d+/)[0];
        let map = pathname.indexOf(".chunk.js.map") > -1 ? '.map' : '';
        let chunkPath = './dist/' + chunkNumber + '.chunk.js' + map;

        response.writeHead(200, jsHeader);
        return fs.createReadStream(chunkPath).pipe(response);
    }
    else {
        let indexFile = fs.readFileSync(entryPage, { encoding: 'utf8' });
        response.send(indexFile);
    }
});

app.listen(8001, () => {
    console.log('Celine started on 8001');
});