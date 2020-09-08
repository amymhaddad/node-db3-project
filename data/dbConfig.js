const knexfile = require("../knexfile.js");
const knex = require("knex");
 
const database = "development";
 
module.exports = knex(knexfile[database]);
