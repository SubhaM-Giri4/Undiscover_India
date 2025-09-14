const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// plugin will automatically add username + hash + salt fields
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
