var express = require('express');
var router = express.Router();
// link the route to the javascript 
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api', { title: 'database' });
});
// adding the routs for the axios calls
// all calls to allergies database
router.get('/allergies/:userid', db.getuserpref);
router.post('/allergies', db.adduserpref);
router.get('/allergies', db.allusers);
router.put('/allergies/:userid', db.editpref);

// all calls to information database

router.post('/information', db.addproduct);
router.get('/information', db.information);
router.get('/information/:userid', db.userhistory);
router.delete('/information/:id', db.deleteproduct);


module.exports = router;