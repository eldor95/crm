const mongoose = require('mongoose')


const Viloyat = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('VILOYAT', Viloyat)