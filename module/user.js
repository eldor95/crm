const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
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
        default: true
    },
    block: {
        type: Boolean,
        enum: [false, true],
        default: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'mentor', 'diler', 'student']

    }
}, {
    timestamps: true
});


User.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

User.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model('USER', User)