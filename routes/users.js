var express = require('express');
var router = express.Router();
var usersModule = require("../Modules/users");
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/register',usersModule.Register);
router.post('/login',usersModule.Login);
module.exports = router;
