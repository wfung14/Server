const express =require('express')

const Athlete = require('../models/athlete')

const router = express.Router()


router.get('/athletes', (req, res, next) => {
    Athlete.find()
        .then(athletes => {
            return athletes.map(athlete => athlete)
        })
        .then(athletes => {
            res.status(200).json({ athletes: athletes })
        })
        .catch(next)
})


router.get('/athletes/:id', (req, res, next) => {
    Athlete.findById(req.params.id)
        .then(athlete => {
            res.status(200).json({ athlete: athlete })
        })
        .catch(next)
})


router.post('/athletes', (req, res, next) => {

    Athlete.create(req.body.athlete)
        .then(athlete => {
            // top lvl of this object is character
            res.status(201).json({ athlete: athlete })
        })
        .catch(next)
})

module.exports = router