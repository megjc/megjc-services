var express = require('express');
var router = express.Router();
const ldap = require('../libs/ldap')
const message = require('../libs/message').message
/* GET home page. */

router.post('/users/ldap', function(req, res) {
  if(req.body.username == '' || req.body.password == '')
        return res.status(400).json(error.EMPTY_VALUES)

  if(req.body.username == '' && req.body.password == '')
        return res.status(400).json(error.EMPTY_VALUES)

 let username = req.body.username
 let password = req.body.password

 ldap.auth(username, password, (err, result)=>{
    if(err != null) return res.json(message.BAD_REQUEST)
    return res.json({'success': true, 'token': 'token', 'text': 'Login successful'})
  })
});

module.exports = router;
