let pubChannel

exports.startPublisher = connection => {
	connection.createChannel('emailQueue')
		.then(ch => {
			pubChannel = ch
			ch.assertQueue('emailQueue', { durable: false })
		})
		.catch(error => {
			console.log(error)
		})
}

exports.publish = message => {
	try {
		pubChannel.sendToQueue('emailQueue', Buffer.from(message))
	} catch (error) {
		console.log(error)
	}
}
