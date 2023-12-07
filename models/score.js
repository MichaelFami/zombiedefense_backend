const { Schema } = require('mongoose')
const scoreSchema = new Schema (
   {
      user: { type: String, required: true },
      score: { type: String, required: true },
      
   },

   { timestamps: true})

module.exports = scoreSchema