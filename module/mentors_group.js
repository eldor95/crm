// lc_ID(Learning_center model)
// fan_ID(Fan model)
// mentor_ID(Mentor model)
// name
const mongoose = require('mongoose')
const Schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lc_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "LEARNING_CENTER",
        index: true,
        required: true
    },
    fan_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "FAN",
        index: true,
        required: true
    },
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTOR",
        index: true,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_GROUP', Schema)