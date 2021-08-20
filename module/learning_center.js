// name
// viloyat_ID(Viloyat model)
// tuman_ID(Tuman model)
// diler(User model)
const mongoose = require('mongoose')
const Learning_center = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    viloyat_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "VILOYAT",
        required: true
    },
    tuman_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "TUMAN",
        required: true
    },
    diler_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "USER",
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('LEARNING_CENTER', Learning_center)