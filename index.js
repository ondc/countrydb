"use strict";

var fs = require("fs");
var db = fs.readFileSync(__dirname + "/" + "db.json", "utf-8");

// \object `countrydb.db`
//
// Parsed `db.json` data.
exports.db = JSON.parse(db);
