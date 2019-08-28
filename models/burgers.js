var ORM = require("../db/config/orm.js")

var burger = {
    selectAll: function(cb) {
      ORM.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    
    insertOne: function(cols, vals, cb) {
      ORM.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      ORM.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  

module.exports = burger;