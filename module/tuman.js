const mongoose = require('mongoose')


const Tuman = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    viloyat_ID: {
        type: mongoose.Schema.ObjectId,
        ref: "VILOYAT",
        index: true,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('TUMAN', Tuman)