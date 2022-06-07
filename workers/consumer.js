const { transporter } = require('../services/emailService')
const config = require('../config')
let channel

exports.startConsumer = connection => {
	connection.createChannel('emailQueue')
		.then(ch => {
			channel = ch
			ch.assertQueue('emailQueue', { durable: false })
			ch.consume('emailQueue', sendEmail)
		})
}

function sendEmail(message) {
	const resultOftargets = JSON.parse(message.content.toString())

	resultOftargets.forEach(result => {
		let message = result.currentScore >= result.targetScore ?
			'Congratulations. You have reached your target!!' : 'You did not reach your target. Please dont give up.'

		transporter.sendMail({
			from: config.AUTH_EMAIL,
			to: result.userId.email,
			subject: 'Target Result',
			html: `Hello ${result.userId.username}, <br> ${message}`
		})
	})
	channel.ack(message)
}
