CountryDB
=========

Country and region codes DB for node.js.

Usage
-----

```js
// JSON database is always stored in `countrydb.db` and it's
// at the moment the only provided member of `countrydb`.
var db = require("countrydb").db;

// DB maps two-letter country codes to an object having name
// and regions. The following will list all country codes and
// their names.
for (var k in db) {
  console.log("COUNTRY: '" + k + "' " + db[k].name);
}

// The following code lists all states in USA.
var regions = db.US.regions;
for (var k in regions) {
  console.log("STATE: '" + k + "' " + regions[k].name);
}
```
