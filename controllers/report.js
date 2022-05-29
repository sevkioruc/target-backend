const Target = require('../models/target')

exports.getAllFinishedTargetsOnYesterday = async (req, res) => {
	const targets = await Target.find({
		finishedDate: {
			$gte: req.query.yesterday,
			$lt: req.query.today
		}
	})
	res.status(200).json({ targets })
}
