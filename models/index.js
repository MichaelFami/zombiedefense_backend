const mongoose = require('mongoose')
const scoreSchema = require('./score')


const Score = mongoose.model('Score', scoreSchema)


module.exports = {
    Score
}
