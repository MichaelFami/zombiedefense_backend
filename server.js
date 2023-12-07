const express = require('express');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors')

const scoreController = require('./controllers/scoreController');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())
app.use(cors())
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('this server is running on port 3001 and is connected to mongoDB')
})


app.get('/score', scoreController.getAllScore)
app.get('/score/:id', scoreController.getScoreById)
app.post('/score', scoreController.createScore)
app.put('/score/:id', scoreController.updateScore)
app.delete('/score/:id', scoreController.deleteScore)
app.get('/topscores', scoreController.getTopScores);


app.listen(PORT, () => {
console.log(`Listening on port: ${PORT}`)
})