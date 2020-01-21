var http = require('http');

var server = http.createServer(function(req, res){

  res.send("hello world")

});
server.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});