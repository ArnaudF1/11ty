var express = require('express');
var app = express();
 
//Serves all the request to /_site folder
app.use('/', express.static(__dirname + '/_site'));
 
app.listen();
