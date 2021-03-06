var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var cursor = req.db.collection('users').find().sort({'local.score': -1}).toArray(function(err, doc) { //access the db, and sort users by score in decreasing way.
        if (!err) {
            res.render('rankings', {"doc": doc});
        }
    });
});

module.exports = router;