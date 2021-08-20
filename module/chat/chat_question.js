const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    chat_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "CHAT",
        index: true,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    file: {
        type: String
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
module.exports = mongoose.model('CHAT_QUESTION', Schema)