const mongoose = require('mongoose')
const Mentors_test = mongoose.Schema.ObjectId({
    question: {
        type: String,
        required: true
    },
    options: {
        a: {
            type: String,
            required: true
        },
        b: {
            type: String,
            required: true
        },
        c: {
            type: String,
            required: true
        },
        d: {
            type: String,
            required: true
        },
    },

    answer: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: ""
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('MENTORS_TEST', Mentors_test)