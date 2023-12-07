const { Score } = require('../models');

module.exports={
    getAllScore,
    getScoreById,
    createScore,
    updateScore,
    deleteScore,
    getTopScores
}

async function getAllScore(req,res){
    try{
        const scores = await Score.find();
        res.json(scores);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getScoreById (req,res){
    try{
        const {id} = req.params;
        const score = await Score.findById(id);
        if(score){
            return res.json(score);
        }
        res.status(404).json({message:'Score not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createScore (req, res) {
    try {
        const score = await  Score.create(req.body)
        await score.save()
        return res.staus(201).json({
            score,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateScore (req, res) {
    try {
        const { id } = req.params
        let score = await Score.findByIdAndUpdate(id)
        if (score) {
            return req.status(200).json(score)
        }
        throw new Error('Score products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteScore (req, res) {
    try {
        const id = req.params
        let score = await Score.findByIdAndDelete(id)
        if (score) {
            return res.status(200).json(score)
        }
        throw new Error('Score products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function getTopScores(req, res) {
    try {
        const topScores = await Score.find({}).sort({ score: -1 }).limit(10);
        res.json(topScores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


