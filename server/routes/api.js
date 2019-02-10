const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');
var db;
MongoClient.connect('mongodb://test1:testone1@ds055925.mlab.com:55925/delonixregia', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('testone');
});

router.get('/authuser/:username/:password', (req, res2) => {
    var username = req.params.username;
    var password = req.params.password;
    db.collection('users').findOne({ "name": username }, { password: 1, role: 1, _id: 0 }, function (err, result) {
        bcrypt.compare(password, result.password, function (err, res) {
            if (res) {
                res2.send([{ "auth": true, "role": result.role }]);
            } else {
                res2.send([{ "auth": false }]);
            }
        });
    });
});
router.get('/reguser/:name/:password/:role', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('users').save({ "name": req.params.name, "password": hash, "role": req.params.role }, (err, result) => {
        });
    });
})

module.exports = router;