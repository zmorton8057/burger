var ORM = require("../db/config/orm.js")

var burger = {
    selectAll: function() {
      ORM.selectAll("Burgers", function(res) {
        // console.log(res);
      });
    },
    
    insertOne: function(burgerName) {
      ORM.insertOne("Burgers", burgerName, function(res) {
        console.log(res);
      });
    },
    updateOne: function(id) {
      ORM.updateOne("Burgers", id, function(res) {
        console.log(res);
      });
    }
  };
  

module.exports = burger;