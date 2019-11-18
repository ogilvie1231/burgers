var express = require('express')
var router = express.Router()
var connection = require('../config/connection')
var app = express()


router.get('/', function(req, res) {
    connection.query('SELECT * FROM burgers', function(err, data) {
        if (err) {
            console.log('Error fetching burgers: ', err)
            res.status(400).send(err)
        } else {
            res.send(data)
                // res.render('index', { burgers: data })
        }
    })
})

router.post('/burger', function(req, res) {
    var newBurger = req.body.burgerName.trim()
    connection.query("INSERT INT0 burgers (burger_name) VALUES (?)", [newBurger], function(err, data) {
        if (err) {
            console.log('Error posting new burger: ', err)
            res.status(400).send(err)
        } else {
            res.send(data)
                // res.render
        }
    })
})
module.exports = router