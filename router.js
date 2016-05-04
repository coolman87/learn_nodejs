function router(pathname, handler, response, postData) {

    if (typeof handler[pathname] !== 'function') {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not found");
        return;
    }

    handler[pathname](response, postData);
}

module.exports = router;