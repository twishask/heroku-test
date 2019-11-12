// ... other imports
//var bodyParser = require('body-parser');
var express = require('express');
var app = express();
//var mongoose = require('mongoose');
//var cors = require('cors');
const path = require("path")
const port = process.env.PORT || 2000;


// ... other app.use middleware
//app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/trial', function (req, res) {
  console.log("Express working");
    res.send("Express working on heroku")
})
app.post('/order-creation', function (req, res) {
  console.log(req);
  console.log(res);
  console.log(req.body);
  res.status(200);
  res.send("req.body here");
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);
console.log("Server running at http://localhost:2000");

/*

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type','text/plain');
  res.end('Testcase B')
  }).listen(port,function() {
  console.log('Server started at '+port)
  });

*/
