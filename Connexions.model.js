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
    }

})

module.exports = mongoose.model('connexions', newConnexion)


