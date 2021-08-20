// mentor_ID(Mentor model)
// mentor_group_ID(Mentor 's group model) 
// mentor_form_ID(Mentor 's form model)
// mentor_theme_ID(Mentor 's theme model)
// audio_name 
// audio_file
// audio_time

const mongoose = require('mongoose')
const Mentors_audio = mongoose.Schema({
    audio_name: {
        type: String,
        required: true
    },
    audio_file: {
        type: String,
        required: true
    },
    audio_time: {
        type: Number,
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
    },
    mentors_form_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_FORM",
        required: true
    },
    mentors_theme_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_THEME",
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_AUDIO', Mentors_audio)