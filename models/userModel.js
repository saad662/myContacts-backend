const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the Username"],
    },
    email: {
        type: String,
        require: [true, "Please add the Email Address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        require: [true, "Please add the Phone number"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);