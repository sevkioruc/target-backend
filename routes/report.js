const router = require('express').Router()
const reportController = require('../controllers/report')

module.exports = app => {
	router.get('/', reportController.getAllFinishedTargetsOnYesterday)

	app.use('/v1/report', router)
}
