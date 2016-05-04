function router(pathname, handler) {

    if (typeof handler[pathname] !== 'function') {
        return 'is not correct path';
    }
    
    return handler[pathname]();
}

module.exports = router;