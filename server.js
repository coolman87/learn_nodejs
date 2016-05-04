var url = require('url'),
    http = require('http');

function start(router, handler) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        var postData = "";
        request.setEncoding("utf8");

        request.addListener('data', function (postDataChunk) {
            postData += postDataChunk;
        });

        request.addListener('end', function () {
            router(pathname, handler, response, postData);
        });

    }).listen(8888);

    console.log('your server started in 8888');
}

exports.start = start;