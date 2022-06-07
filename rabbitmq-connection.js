const amqp = require('amqplib')
const { AMQP_URL } = require('./config')
const { startPublisher } = require('./workers/publisher')
const { startConsumer } = require('./workers/consumer')

const start = async () => {
	amqp.connect(AMQP_URL)
		.then((connection) => {
			console.log('[AMQP] Connected to Rabbitmq')
			startPublisher(connection)
			startConsumer(connection)
		}).catch(error => {
			console.log(error)
		})
}

start()
