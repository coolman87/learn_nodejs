var exec = require('child_process').exec,
    queryString = require('querystring'),
    formidable = require('formidable');

var handlers = {
    start: function (resp, postData) {
        var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea><br/>' +
            '<input name="name" type="text"><br/>' +
            '<input name="file" type="file"><br/>' +
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '</body>' +
            '</html>';

        resp.writeHead(200, {"Content-Type": "text/html"});
        resp.end(body);
    },
    exec: function (resp, postData) {
        exec("ls -lah", function (error, stdout, stderr) {
            resp.writeHead(200, {"Content-Type": "text/plain"});
            resp.end(stdout);
        });
    },
    upload: function (rep, postData) {
        rep.end(postData);
    }
};

module.exports = handlers;