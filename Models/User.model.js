const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newUser = new Schema({
    name:{
        type: String,
        required: true,
    },
    score: {
        type: Number,
        default:0,
    },
    bestScore: {
        type: Array,
        default: [this.score, 10]
    }
})

module.exports = mongoose.model('User', newUser)


