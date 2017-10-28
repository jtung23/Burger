var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

var orm = {
	selectAll: function(table, callback) {
		console.log('selectAll func runs');
		var query = "SELECT * FROM " + table + ";";
		connection.query(query, function(err, results) {
			if (err) {
				throw err;
			};

			callback(results);
		})
	},

	insertOne: function(table, cols, vals, callback) {
		console.log('insertone func runs')
		var query = "INSERT INTO " + table;
		query += " (";
    query += cols.toString();
    query += ") ";
    query += "VALUES (";
    query += printQuestionMarks(vals.length);
    query += ") ";

    connection.query(query, vals, function(err, result) {
    	if (err) throw err;

    	callback(result);
    })
	},
	updateOne: function(table, objColVals, condition, callback) {
		console.log('updateone func runs');
		var query = "UPDATE " + table;

    query += " SET ";
    query += objToSql(objColVals);
    query += " WHERE ";
    query += condition;
    console.log('CONDTITION', condition);
    console.log('update put query', query);

    connection.query(query, function(err, result) {
    	if (err) throw err;

    	callback(result)
    })
	}
}; 

module.exports = orm;