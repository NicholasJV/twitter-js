var express = require("express");
var app = express();
var morgan = require("morgan");
var swig = require("swig");
var tweetBank = require("./tweetBank.js");
var routes = require('./routes/index.js');



app.use(morgan('tiny'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html')
app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });
app.use('/', routes);



// app.get('/', function(req, res){
// 	console.log("nothing to view here, mon")
// })

// app.get('/option', function(req, res){
// 	res.send("Here's a useless corner")
// })

// app.get('/option2', function(req, res){
// 	res.render( 'index', data );
// })

// app.post('/', function(req, res){
// 	res.send("Dis post right her")
// 	res.status(201).send;
// })



var server = app.listen(8080, function () {
	console.log('server runnin!');
});




// var data = {
// 	title: 'An Example',
// 	people: [{
// 		name: 'ScottEggs'
// 	}, {
// 		name: 'NickVan'
// 	}, {
// 		name: 'Samson'
// 	}, {
// 		name: 'D\'Angelo'
// 	}]
// };
// swig.renderFile(__dirname + '/views/index.html', data, function (err, output) {
// 	console.log(output)
// })

// app.use(function(req, res, next){
// 	// res.send("Sup use func!");
// 	console.log("ALL ROUTES:")
// 	console.log("req", req.method)
// 	console.log("res", res.statusCode)
// 	console.log("-=-=-=-=-=-=-=-=-=-=-")
// 	next()
// })
//instead we used MORGAN BABY:



