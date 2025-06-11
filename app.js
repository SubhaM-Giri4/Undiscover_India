const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
    res.render('hi');
});
app.listen(8080,()=> {
    console.log('Server is running on port 8080');
})