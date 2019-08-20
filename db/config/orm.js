const connection = require("./connection.js")

var selectAll = function () {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM burgers", function (err, results, fields) {
            if (err) throw err
        });
    });
};



var insertOne = function(values){
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("INSERT INTO burgers(burger_name) VALUES=?", [values],function (err, results, fields) {
            if (err) throw err
        });
    });
};

var updateOne = function(){
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("UPDATE customers SET devoured = true WHERE id=? AND address = false", function (err, results, fields) {
            if (err) throw err
        });
    });
};

module.exports = ORM;