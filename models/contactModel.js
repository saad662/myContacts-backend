const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        require: [true, "Please add the Contact name"],
    },
    email: {
        type: String,
        require: [true, "Please add the Email Address"],
    },
    phone: {
        type: String,
        require: [true, "Please add the Phone number"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contacts", contactSchema);