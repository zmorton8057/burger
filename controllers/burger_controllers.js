const express = require('express');
var router = express.Router()
const burger = require('../models/burgers.js')


router.get("/", function (req, res) {
    burger.selectAll(function(data){
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject)
        res.render("index", burgerObject)
    })
})

router.post("/burger/create", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (res) {
            res.json({id: res.insertId})
        });
});

router.put("/burger/update/:id", function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log("condition ", condition)

    burgers.updateOne({
        "devoured": req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})


module.exports = router;