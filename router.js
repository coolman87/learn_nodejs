function router(pathname, handler, response) {

    if (typeof handler[pathname] !== 'function') {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not found");
        return;
    }

    handler[pathname](response);
}

module.exports = router;