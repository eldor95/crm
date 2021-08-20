// mentor_ID (Mentor model)
// mentor_group_ID (Mentor's group  model)
// name

const mongoose = require('mongoose')

const Mentors_form = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTOR",
        required: true
    },
    mentors_group_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_GROUP",
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_FORM', Mentors_form)