var ORM = require("../db/config/orm.js")

var burger = {
    selectAll: function(cb) {
      ORM.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    
    insertOne: function(burgerName, cb) {
      ORM.insertOne("burgers", burgerName, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      ORM.updateOne("burgers", id, function(res) {
        cb(res);
      });
    }
  };
  

module.exports = burger;