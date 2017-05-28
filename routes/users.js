var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // get the connection to the required database table
  var User = bookshelf.Model.extend({
      tableName: 'users'
  });
  new User({username: req.username, password: req.password}).save().then(function(model){
    Log.console(model);
    Log.console("saved in user");
    Log.console(res);
  })
});

module.exports = router;
