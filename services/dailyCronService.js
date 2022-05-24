const cron = require('node-cron')

// This cron job runs at 00:00 everyday
// https://crontab.guru/

const job = cron.schedule('0 0 * * *', () => {
	console.log("It is 00:00");
})

job.start()
