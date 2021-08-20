// mentor_ID(Mentor model)
// mentor_group_ID(Mentor 's group model) 
// mentor_form_ID(Mentor 's form model)
// mentor_theme_ID(Mentor 's theme model)
// collection_name
const mongoose = require('mongoose')
const Mentors_collection = mongoose.Schema({
    collection_name: {
        type: String,
        required: true
    },
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
    },
    mentors_theme_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_THEME",
        index: true,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_COLLECTION', Mentors_collection)