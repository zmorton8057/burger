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
        console.log(burgerObj)
        res.render('index', burgerObj)
    })
});

module.exports = router;