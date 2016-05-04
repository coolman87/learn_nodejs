var exec = require('child_process').exec;

var handlers = {
    start: function (resp) {
        exec("ls -lah", function (error, stdout, stderr) {
            resp.writeHead(200, {"Content-Type": "text/plain"});
            resp.end(stdout);
        });
    },
    upload: function (rep) {
        rep.end('upload files');
    }
};

module.exports = handlers;