const connection = require("./connection.js")

const orm = {

    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableInput, cols, vals, cb) {
        var queryString = `INSERT INTO ` + table + `(` + cols.toString() + `) VALUES (` + printQuestionMarks(vals.length) + `)`

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },

    // updateOne: function(){},
}

module.exports = orm;