
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./config/db')
const PORT = 3005

const athleteRoutes = require('./routes/athlete-routes')


mongoose.set('strictQuery', true)


mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))


app.use(express.json())


app.use(athleteRoutes)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app