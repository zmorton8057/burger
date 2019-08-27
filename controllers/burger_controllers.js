const express = require('express');
var router = express.Router()
const burger = require('../models/burgers.js')
var connection = require("../db/config/connection.js")

router.get("/", function(req, res){
    res.send('burgers')
})

router.get("/burger", function(req, res){
    burger.selectAll(function(data){
        var burgerObj = {
            burger: data
        }
        // console.log(data)
        res.json(burgerObj)
    })
});

router.post("/burger/create", function(req, res){
    burgers.insertOne([
        "burger_name"
    ], [
        req.body.burger_name],
        function(data){
            res.redirect('/burger')
        });
});

router.put("/burgers/update/:id", function(req, res){
    var condition = 'id = ' + req.params.id;
    burgers.updateOne({
        "devoured": req.body.devoured
    }, condition, function(data){
        res.redirect("/burger")
    })
})


module.exports = router;