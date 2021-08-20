const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTOR",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    group_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_GROUP",
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('CHAT', Schema)