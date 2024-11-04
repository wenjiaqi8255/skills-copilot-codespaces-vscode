// Create web server for comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// Create array to store comments
var comments = [];

// POST method to add comment
app.post('/comment', function (req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// GET method to retrieve all comments
app.get('/comment', function (req, res) {
    res.json(comments);
});

// Create server
var server = app.listen(3000, function () {
    console.log('Server running at http://localhost:' + server.address().port);
});