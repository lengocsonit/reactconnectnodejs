var express = require('express');
var router = express.Router();
const u = "123@gmail.com";
const p = "123";

/* GET home page. */
router.get('/getdata', function(req, res, next) {
  res.send('Da lay duoc data');
});

router.post('/login', function(req, res, next) {
  const {username, password} = req.body;
  console.log(username);
  console.log(password);

  //login check
  if ((u === username) && (p === password)) {
    //Login success
    res.send("Login thanh cong");
  } else {
    res.send("Login khong thanh cong");
  }
});

module.exports = router;
