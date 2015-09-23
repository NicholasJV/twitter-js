var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


var rootDirPath = process.cwd()
// console.log(root);

router.use('/', function (req, res) {
	var path = req.path;
	// console.log(path);
	var tweets = tweetBank.list();

	if (path === '/'){
  		res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
	} else {
		res.sendFile(rootDirPath + '/public' + path);
	}
});



module.exports = router;




// router.get('/stylesheets/style.css', function (req, res) {
// 	res.sendFile('static/stylesheets/style.css')
// });

 //res.sendFile('/public');
  // console.log(req.path)
  // if(req.path === '/stylesheets/style.css') {
  // 	res.sendFile('../public/stylesheets/style.css')
  // } else {