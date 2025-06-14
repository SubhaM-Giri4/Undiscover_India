const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String,
        default:"https://unsplash.com/photos/mountains-and-lake-with-a-boat-peaceful-scenery-LExlOWiuwR0", set:(v)=>v ==="" ?" " :v, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },

})

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;