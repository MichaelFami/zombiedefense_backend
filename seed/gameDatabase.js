const db = require('../db')
const { Score } = require('../models')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const userScores = [
    

    ]

   

await Score.insertMany(userScores)
console.log('score')


}
const run = async () => {
    await main()
    db.close()
}

run()