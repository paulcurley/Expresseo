var express = require('express'),
    app = express(),

    fetch = function(url, callback) {

        var html = '';
        var phantom = require('child_process')
            .spawn('phantomjs', ['server.js', url]);
        phantom.stdout.setEncoding('utf8');
        phantom.stdout.on('data', function(data) {
            html += data.toString();
        });
        phantom.on('exit', function(code) {
            callback(content);
        });
    },

    serve = function(req, res) {
        console.log(req)
        var url = "http://paulcurley.github.io/Expresseo"; // static for now
        fetch(url, function(content) {
            res.send(content);
        });
    };

app.get(/(.*)/, serve);
app.listen(3000);
