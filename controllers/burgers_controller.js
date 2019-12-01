var app = require("express");
var burgerJs = require("../models/burgers")
var router = app.Router()



// Create the router for the app, and export the router at the end of your file.


router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log(hbsObject);
      console.log('router.get: ', data)
      res.render("index", hbsObject);
    });
  });
  


// router.get('/', function(req, res) {
//     connection.query('SELECT * FROM burgers', function(err, data) {
//         if (err) {
//             console.log('Error fetching burgers: ', err)
//             res.status(400).send(err)
//         } else {
//             res.send(data)
//                 // res.render('index', { burgers: data })
//         }
//     })
// })

// router.post('/burger', function(req, res) {
//     var newBurger = req.body.burgerName.trim()
//     connection.query("INSERT INT0 burgers (burger_name) VALUES (?)", [newBurger], function(err, data) {
//         if (err) {
//             console.log('Error posting new burger: ', err)
//             res.status(400).send(err)
//         } else {
//             res.send(data)
//                 // res.render
//         }
//     })
// })
// module.exports = router