var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require("multer");

app.use(bodyParser.urlencoded( { extended: false }));
app.use(multer({dest: './tmp/'}).single('file'));

app.get('/upload.html', function (req, res) {
    res.sendFile(__dirname + "/" + "upload.html");
});


app.post('/file_upload', function (req, res) {
    var file = __dirname + "/video/" + req.file.originalname;

    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'Success!',
                    filename: req.file.originalname
                };
            }
            console.log(response);
            res.redirect('http://localhost:3001/video_list_add.html');
        });
    });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s", host, port);
});
