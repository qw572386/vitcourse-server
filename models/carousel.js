const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const carouseSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    src: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Carouse', carouseSchema)
