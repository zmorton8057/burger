const express = require('express');
const app = express();
const burger = require('../models/burgers.js')

app.use("/", burger);

module.exports = router;