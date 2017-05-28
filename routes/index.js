var express = require('express');
var router = express.Router();
var bookshelf = require('../connection/dbconnect');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/save', function (req,res) {
    var User = bookshelf.Model.extend({
        tableName: 'users'
    });
    new User({username: req.body.mail, password: req.body.pass}).save().then(function(model){
        console.log(model);
        console.log("saved");
    });
    res.render('layout', {body: 'values saved'});
    console.log(req.body.mail,req.body.pass);
});

router.post('/signin', function (rer,res) {
    res.render('signin', {title: 'Sign In'});
})

module.exports = router;
