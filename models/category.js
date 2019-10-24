const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    src: {
        type: String
    },
    parentid: {
        type: String,
        default: 'root'
    },
    sortnum: {
        type: Number
    }
})
module.exports = mongoose.model('Category', categorySchema)
