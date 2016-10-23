var express = require('express');
var path = require('path');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = 3030;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);

console.log('Listening on port ' + port + '...');

