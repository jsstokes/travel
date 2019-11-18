var express = require('express');
var router = express.Router();

var testDocuments = [
  {
    firstName: "FirstName 1",
    lastName: "LastName 1"
  },
  {
    firstName: "FirstName 2",
    lastName: "LastName 2"
  }
] 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', documents: testDocuments });
});

module.exports = router;
