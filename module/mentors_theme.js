const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTOR",
        index: true,
        required: true
    },
    mentors_group_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_GROUP",
        index: true,
        required: true
    },
    mentors_form_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_FORM",
        index: true,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_THEME', Schema)