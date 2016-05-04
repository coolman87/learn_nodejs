var url = require('url'),
    http = require('http');

function start(router, handler) {
    http.createServer(function (request, response) {
        
        var pathname = url.parse(request.url).pathname;
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(router(pathname, handler));
        
    }).listen(8888);

    console.log('your server started in 8888');
}

exports.start = start;