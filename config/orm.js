var connection = require("./connection");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(tableInput, name, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name) VALUES " + "(" + name + ");"
        
        console.log("queryString: ", queryString)

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    }
}
module.exports = orm
//     update: function(tableInput,) {
// }


// updateOne: function (tableInput, coloumInput, val, id, cb) {
//     var queryString = "UPDATE ?? SET ?? =? WHERE ID =?";
//     connection.query(queryString, [tableInput, coloumInput, val, id], function (err, result) {
//         if (err) throw err;
        
//         // console.log(result);
//         cb(result);
//     });
// }