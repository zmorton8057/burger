const connection = require("./connection.js")
var ORM = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, res){
            if (err) throw err
            console.log(res)
        })
    },

    insertOne: function(burgerName) {
        var newBurgerStr = "INSERT INTO burgers (burger_name) VALUES = ?";
        connection.query(newBurgerStr, [burgerName], function(err, res){
            if (err) throw err
            console.log(res)
        })
    },

    updateOne: function(id) {
        var updateStr = "UPDATE * FROM burgers WHERE id = ? SET devoured = true";
        connection.query(updateStr, [id], function(err, res){
            if (err) throw err
            console.log(res)
        })
    },
}


module.exports = ORM;