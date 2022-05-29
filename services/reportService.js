const axios = require('axios')
const config = require('../config')

exports.getAllFinishedTargetsOnToday = () => {
	const today = new Date()
	const yestarday = new Date().setDate(new Date().getDate() - 1)

	axios.get(`${config.BASE_URL}/v1/report?today=${today}&yesterday=${yestarday}`)
		.then((res) => {
			const targets = res.data.targets
			console.log(targets)
		})
		.catch((err) => {
			console.log(err)
		})
}
