const { Pool } = require('pg')

const pool = new Pool({
	host: undefined,
	port: undefined,
	user: undefined,
	password: undefined,
	database: undefined,
})

module.exports = pool
