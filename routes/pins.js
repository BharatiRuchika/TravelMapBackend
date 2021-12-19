var express = require('express');
var router = express.Router();
var pinsModule = require("../Modules/pins");
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/savepin',pinsModule.savePin);
router.get('/getpins',pinsModule.getPins);
module.exports = router;