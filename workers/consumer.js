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
	console.log(message.content.toString())
	channel.ack(message)
}
