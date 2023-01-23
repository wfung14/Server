
const mongoose = require('mongoose')
const statSchema = require('./stat')

const Schema = mongoose.Schema

const seasonSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		stats: [statSchema]
	},
	{
		timestamps: true,
	}
)

const Season = mongoose.model('Season', seasonSchema)


module.exports = Season
