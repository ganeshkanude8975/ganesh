var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    host:"bmb61yyuqwfdfrajudor-mysql.services.clever-cloud.com",
    user:"ug8xpsvp1h5nrsom",
    password:"9jbtSNjDPlXLTApKuboA",
    database:"bmb61yyuqwfdfrajudor"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
