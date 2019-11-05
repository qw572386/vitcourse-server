const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const lessonSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    view: {
        type: Number,
        default: 0
    },
    attention: {
        type: Number,
        default: 0
    },
    comment: {
        type: Array,
        default: []
    },
    content: {
        type: String,
        default: ''
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    lastEditTime: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String
    },
    tags: {
        type: Array,
        default: []
    },
    type: {
        type: String
    },
    category: {
        type: Array,
        default: []
    }
}, {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'lastEditTime' }
})
module.exports = mongoose.model('Lesson', lessonSchema)
