const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const carouseSchema = new Schema({
    lessonid: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Carouse', carouseSchema)
