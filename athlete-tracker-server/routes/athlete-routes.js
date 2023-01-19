const express =require('express')

const { handle404 } = require('../lib/custom-errors')

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
         
            res.status(201).json({ athlete: athlete })
        })
        .catch(next)
})



router.patch('/athletes/:id', (req, res, next) => {
    Athlete.findById(req.params.id)
        .then(handle404)
        .then(athlete => {
            
            return athlete.updateOne(req.body.athlete)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})



router.delete('/athletes/:id', (req, res, next) => {
    Athlete.findById(req.params.id)
        .then(handle404)
        .then(athlete => {
            return athlete.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router