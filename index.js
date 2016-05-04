var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');

var handler = {
    '/': requestHandlers.start,
    '/start': requestHandlers.start,
    '/exec': requestHandlers.exec,
    '/upload': requestHandlers.upload
};

server.start(router, handler);