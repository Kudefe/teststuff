const express = require('express');
const router = express.Router();
var request = require('superagent');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dev Say' });
});



module.exports = router;


