const express = require('express')

const Athlete = require('../models/athlete')

const router = express.Router()

const startAthletes = [
	{
		firstName: 'Michael',
		lastName: 'Jordan',
		sport: 'basketball',
		speed: 88,
	},
	{
		firstName: 'Babe',
		lastName: 'Ruth',
	    sport: 'baseball',
		speed: 50,
	},
	{
		firstName: 'Tom',
		lastName: 'Brady',
		sport: 'football',
		speed: 65,
	},
]

router.get('/athletes', (req, res, next) => {
	Athlete.deleteMany({})
        .then(() => {
            Athlete.create(startAthletes)
                .then((athletes) => res.status(200).json({ athletes: athletes }))
        })
        .catch(next)
})

module.exports = router