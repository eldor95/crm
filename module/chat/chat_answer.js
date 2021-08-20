const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    chat_question_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "CHAT_QUESTION",
        index: true,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    file: {
        type: File,
        required: true
    },
    user_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "USER",
        index: true,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('CHAT_ANSWER', Schema)