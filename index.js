var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');


var handler = {
    '/': requestHandlers.start,
    '/start': requestHandlers.start,
    '/upload': requestHandlers.upload,
    '/news': requestHandlers.news
};


server.start(router, handler);