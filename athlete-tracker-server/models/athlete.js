const mongoose = require('mongoose')

const Schema = mongoose.Schema

const athleteSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		sport: {
			type: String,
			required: true,
		},
        speed: {
            type: Number,
            required: true,
            min: 1,
            max: 100
        }
	},
	{
        timestamps: true
    }
)


const Athlete = mongoose.model('Athlete', athleteSchema)

module.exports = Athlete