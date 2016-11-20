var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    if (req.user) {
        res.render('quiz');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
