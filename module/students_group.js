// mentor_ID(User model)
// lc_ID(Learning_center model)
// fan_ID(Fan model)

const mongoose = require('mongoose')
const Students_group = mongoose.Schema({
    mentor_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTOR",
        index: true,
        require: true
    },
    group_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "MENTORS_GROUP",
        index: true,
        required: true
    },
    student_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "USER",
        index: true,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('STUDENTS_GROUP', Students_group)