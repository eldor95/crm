// name
// diler(User model)
// lc_ID(Learning_center model)
const mongoose = require('mongoose')
const Fan = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diler_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "USER",
        index: true,
        required: true
    },
    lc_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "LEARNING_CENTER",
        index: true,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('FAN', Fan)