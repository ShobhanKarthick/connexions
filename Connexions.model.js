const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newConnexion = new Schema({
    clue:{
        type: String,
        required: true,
    },
    answer:{
        type: String,
        required: true,
    },
    links:{
        type: Array,
        required: true,
    },
    blocked:{
        type: Boolean,
        default: false,
    },
    winCount :{
        type: Number,
        default:0,
    },
    lossCount :{
        type: Number,
        default:0,
    }
})

module.exports = mongoose.model('connexions', newConnexion)


