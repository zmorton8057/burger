const connection = require("./connection.js")

function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push('?')
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob){
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var ORM = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res);
        }); 
    },

    insertOne: function(table, cols, vals, cb) {
        var newBurgerStr = "INSERT INTO " + table;

            newBurgerStr += " (";
            newBurgerStr += cols.toString();
            newBurgerStr += ") ";
            newBurgerStr += "VALUES (";
            newBurgerStr += questionMarks(vals.length);
            newBurgerStr += ") ";
            console.log(newBurgerStr);

        connection.query(newBurgerStr, vals, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var updateStr = "UPDATE " + table;

            updateStr += " SET ";
            updateStr += objToSql(objColVals);
            updateStr += " WHERE ";
            updateStr += condition;
            console.log(updateStr);

        connection.query(updateStr, function(err, res){
            if (err) throw err;
            cb(res);
        });
    }

};


module.exports = ORM;