const Pool = require('pg').Pool
const pool = new Pool({ 
    user: "postgres",
    password: "4774575n",
    host: "localhost",
    port: 5432,
    database: "restApi"
})

module.exports = pool