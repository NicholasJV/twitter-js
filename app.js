var express = require("express");
var app = express();
var morgan = require("morgan");




// app.use(function(req, res, next){
// 	// res.send("Sup use func!");
// 	console.log("ALL ROUTES:")
// 	console.log("req", req.method)
// 	console.log("res", res.statusCode)
// 	console.log("-=-=-=-=-=-=-=-=-=-=-")
// 	next()
// })
//instead we used MORGAN BABY:
app.use(morgan('tiny'));



app.get('/', function(req, res){
	res.send("Sup world!");
})

app.get('/option', function(req, res){
	res.send("Here's a useless corner")
})

app.post('/', function(req, res){
	res.send("Dis post right her")
	res.status(201).send;
})



var server = app.listen(8080, function () {
	console.log('server runnin!');
});