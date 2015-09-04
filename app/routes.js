var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('boogers & cankles');
});

// router.send('/description', )

module.exports = router;
