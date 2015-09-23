var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


// router.get(path, function (req, res)) 
// }



router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  //res.sendFile('/public');
  // console.log(req.path)
  // if(req.path === '/stylesheets/style.css') {
  // 	res.sendFile('../public/stylesheets/style.css')
  // } else {
  	res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
	res.sendFile('/Users/scotteggensperger/FullStack/twitter-js/public/stylesheets/style.css')
});

module.exports = router;