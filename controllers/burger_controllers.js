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

router.get("/burger", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObj = {
            burger: data
        }
        console.log(burgerObj);
        res.render("index", burgerObj)
    })
});

router.post("/burger/create", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name],
        function (data) {
            res.redirect('/burger')
        });
});

router.put("/burger/update/:id", function (req, res) {
    var condition = 'id = ' + req.params.id;
    burgers.updateOne({
        "devoured": req.body.devoured
    }, condition, function (data) {
        res.redirect("/burger")
    })
})


module.exports = router;