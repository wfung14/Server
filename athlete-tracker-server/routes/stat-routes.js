const express = require('express')

const Season = require('../models/season')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')

const router = express.Router()


router.post('/stats', requireToken, (req, res, next) => {
    const seasonId = req.body.stat.seasonId

    console.log(req.user)

    const stat = req.body.stat

    stat.owner = req.user._id


    Season.findById(seasonId)
        .then(handle404)
        .then(season => {
            season.stats.push(stat)


            return season.save()
        })
        .then(season => {
            res.status(201).json({ season: season })
        })
        .catch(next)
})


router.patch('/stats/:statId', (req, res, next) => {
    const seasonId = req.body.stat.seasonId

    const statBody = req.body.stat

    Season.findById(seasonId)
        .then(handle404)
        .then(season => {

            const stat = season.stats.id(req.params.nstatId)


            stat.set(statBody)


            return season.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


router.delete('/stats/:statId', (req, res, next) => {
    const seasonId = req.body.stat.seasonId

    Season.findById(seasonId)
        .then(handle404)
        .then(season => {

            season.stats.id(req.params.statId).remove()


            return season.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router