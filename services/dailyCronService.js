const cron = require('node-cron')
const { getAllFinishedTargetsOnToday } = require('../services/reportService')

// This cron job runs at 00:00 everyday
// https://crontab.guru/

const job = cron.schedule('0 0 * * *', () => {
	getAllFinishedTargetsOnToday();
})

job.start()
