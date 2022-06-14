const mongoose = require('mongoose')
const { MONGODB_URI, DB_NAME } = require('./config')

mongoose.connect(MONGODB_URI, {
	dbName: DB_NAME,
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log('Database connection established.')
	})
	.catch((err) => {
		console.log('Database connection failed.')
	})

module.exports = mongoose.connection
