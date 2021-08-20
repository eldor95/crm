// mentor_ID(Mentor model)
// mentor_group_ID(Mentor 's group model) 
// mentor_form_ID(Mentor 's form model)
const mongoose = require('mongoose')

const Mentors_theme = mongoose.Schema({
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTOR",
        required: true
    },
    mentors_group_ID: {
        typeL: mongoose.Schema.ObjectId,
        ref: "MENTORS_GROUP",
        required: true
    },
    mentors_form_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_FORM",
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_THEME', Mentors_theme)