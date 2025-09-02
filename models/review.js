const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating:{
        type: Number,
        min:0,
        max:5,
    },
    CreatedAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Review", reviewSchema);