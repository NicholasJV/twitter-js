var express = require("express");
var app = express();









app.get('/', function(req, res){
	res.send("Sup world!");
})







var server = app.listen(8080, function () {
	console.log('server runnin!');
});