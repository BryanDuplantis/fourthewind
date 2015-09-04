var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('boogers & cankles');
});

router.post('/user', function (req, res) {

});

module.exports = router;
