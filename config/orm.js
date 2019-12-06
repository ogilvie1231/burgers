var connection = require("./connection");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }); 
    },
    create: function(tableInput, coloumInput, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        
        console.log("queryString: ", queryString)

        connection.query(queryString, [tableInput, coloumInput, val], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },
    update: function (tableInput, coloumInput, val, id, cb) {
        console.log('val: ', val)
        id = parseInt(id)
        val = parseInt(val)
        var queryString = "UPDATE ?? SET ?? = ? WHERE ID = ?";
        
        connection.query(queryString, [tableInput, coloumInput, val, id], function (err, result) {
            if (err) {
                console.log('this.sql: ', this.sql)
                throw err;
            } 
            

            cb(result)
        })
    }
}
module.exports = orm
