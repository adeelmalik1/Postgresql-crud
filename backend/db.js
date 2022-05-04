const Pool  = require("pg").Pool;

const pool  = new Pool({
    user: "postgres",
    password:"Aadi12345678",
    host:"localhost",
    port: 5432,
    database: "merntodo"
});

module.exports = pool;