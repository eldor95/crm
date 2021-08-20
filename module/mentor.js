// mentor_ID(User model)
// lc_ID(Learning_center model)
// fan_ID(Fan model)

const mongoose = require('mongoose')
const Mentor = mongoose.Schema({
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "USER",
        index: true,
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
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('MENTOR', Mentor)