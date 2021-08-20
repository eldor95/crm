const mongoose = require('mongoose')
const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    balance: {
        type: Boolean,
        default: 0
    },
    block: {
        type: Boolean,
        enum: [false, true],
        default: true
    },
    // image: {
    //     type: String,
    //     required: true
    // },
    role: {
        type: String,
        enum: ['admin', 'mentor', 'diler', 'student']

    }
}, {
    timestamps: true
});
module.exports = mongoose.model('USER', User)