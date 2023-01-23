
const express = require('express')
const { requireToken } = require('../config/auth')
const { handle404 } = require('../lib/custom-errors')

const Season = require('../models/season')


const router = express.Router()


router.get('/seasons', requireToken, (req, res, next) => {
	Season.find()
		.then((seasons) => {
			return seasons.map((season) => season)
		})
		.then((seasons) => res.status(200).json({ seasons: seasons }))
		.catch(next)
})


router.get('/seasons/:id', requireToken, (req, res, next) => {

	Season.findById(req.params.id)
		.then(handle404)
		.then((season) => res.status(200).json({ season: season }))
		.catch(next)
})

s
router.post('/seasons', (req, res, next) => {
	Season.create(req.body.season)
		.then((season) => {
			res.status(201).json({ season: season })
		})
		.catch(next)
})


router.patch('/seasons/:id', (req, res, next) => {
	Season.findById(req.params.id)
		.then(handle404)
		.then((season) => {
			return season.updateOne(req.body.season)
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})


router.delete('/seasons/:id', (req, res, next) => {
	Season.findById(req.params.id)
		.then(handle404)
		.then((season) => {
			season.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})


module.exports = router
