// mentor_ID(User model)
// lc_ID(Learning_center model)
// fan_ID(Fan model)

const mongoose = require('mongoose')
const Mentor = mongoose.Schema({
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "USER",
        require: true
    },
    lc_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "LEARNING_CENTER",
        required: true
    },
    fan_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "FAN",
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('MENTOR', Mentor)