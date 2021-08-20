const mongoose = require('mongoose')


const Tuman = mongoose.Schema({
    name: {
        uz: {
            type: String,
            required: true
        },
        ru: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        }
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