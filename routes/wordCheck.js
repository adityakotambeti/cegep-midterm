var express = require('express');
var router = express.Router();

var forbiddenWords = ['bad', 'idiot', 'mean', 'bully', 'shit', 'cuss', 'rant'];

router.post('/', function(req, res, next) {
  res.send(isValid(req.body.data));
});

function isValid(text){
  return !forbiddenWords.some(e => text.indexOf(e) > -1)
}

module.exports = router;
