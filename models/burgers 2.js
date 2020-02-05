var orm = require("../config/orm")

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(coloumInput, val, id, cb) {
      orm.update("burgers", coloumInput, vals, id, function(res) {
        cb(res);
      });
    },
  }; 
  
  module.exports = burger;
   
