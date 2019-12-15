var app = require("express");
var burger = require("../models/burgers")
var router = app.Router()



// Create the router for the app, and export the router at the end of your file.


router.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // console.log('router.get: ', data)
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res) {
    console.log('req.body', req.body)
    burger.create(["burger_name"], [req.body.burger_name], function(result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/burgers/:id", function(req, res) {
    console.log('req.body: ', req.body)
    burger.update("devoured", [req.body.devour], [req.params.id], function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        return res.sendStatus(200)
    })
})

module.exports = router;