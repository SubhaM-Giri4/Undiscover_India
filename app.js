const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Listing =require('./models/listing.js');

main()
    .then(() => {
        console.log(' Connected! DB');
    })
    .catch ((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/testListing',async (req, res) => {
    let sampleListing = new Listing({
        title: "My new Villa",
        description: "My new Villa",
        price: "1300",
        location: "London",
        country: "US",
    });
    await sampleListing.save();
})
app.listen(8080,()=> {
    console.log('Server is running on port 8080');
})

